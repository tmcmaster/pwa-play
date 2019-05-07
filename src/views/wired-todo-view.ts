import { html, property, customElement } from 'lit-element';
import {store} from "../redux/store";
import {BaseView} from "./base-view";
import {Todo} from "../models/todo";
import {State} from "../models/state";
//import {getVisibleTodosSelector} from "../redux/reducer";
import { getVisibleTodosSelector } from '../redux/reducer';
import { connect } from 'pwa-helpers';
//import { store } from '../redux/store';
//import { VisibilityFilter } from '../models/visibility-filter';

import 'wired-elements';
import {UpdateTodoValueAction} from "../redux/actions";

@customElement('wired-todo-view')
export class TodoView extends connect(store)(BaseView) {
    @property()
    private todos: Todo[];
    @property()
    private filter: string;
    // @property()
    // private task: string;

    // noinspection JSUnusedGlobalSymbols
    stateChanged(state: State) {
        this.todos = getVisibleTodosSelector(state);
        this.filter = state.filter;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        // noinspection CssInvalidPropertyValue,CssInvalidHtmlTagReference
        return html`
            <style>
                wired-card {
                    width: 800px;
                    padding: 20px 10px 30px 10px;
                }
                
                div.add {
                    padding: 0 20px 0 10px;
                    display: flex;
                    flex-direction: row;
                }
                
                div.add > wired-input {
                    flex: auto;
                }
                div.add > wired-input {
                    width: 100px;
                }
                div.list {
                    padding: 20px 20px 0 50px;
                }
                
                wired-input.list {
                    width: 600px;
                }
                
                div.filter {
                    padding: 20px 40px 0 20px;
                }
                
                div.filter > wired-radio-group {
                    float: left;
                }
                div.filter > wired-button {
                    float: right;
                }
            </style>
            <wired-card>
                <div class="add">
                    <wired-input value="${this.filter}"></wired-input>
                    <wired-button>Add Todo</wired-button>
                </div>
                <div class="list">                
                    ${
                        this.todos.map(todo => html`
                            <wired-checkbox/>
                            <wired-input class="list"
                                @change="${(e: { target: HTMLInputElement }) => this.updateTodoValue(todo, e.target.value)}" 
                                value="${todo.task}"
                            ></wired-input>
                        `)
                    }
                </div>
                <div class="filter">
                    <wired-radio-group id="rg" selected="${this.filter}">
                        <wired-radio name="All">All</wired-radio>
                        <wired-radio name="Active">Two</wired-radio>
                        <wired-radio name="Complete">Complete</wired-radio>
                    </wired-radio-group>
                    <wired-button>Clear Complete</wired-button>
                </div>
            </wired-card>
        `;
    }


    // noinspection JSMethodCanBeStatic
    updateTodoValue(updatedTodo: Todo, value: string) {
        store.dispatch(new UpdateTodoValueAction(updatedTodo, value));
    }
}