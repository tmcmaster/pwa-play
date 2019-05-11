(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{98:function(e,t,i){"use strict";i.r(t),i.d(t,"TodoView",function(){return p});var d=i(13),o=i(27),a=i(41),r=i(33),s=i(43),n=i(23),l=(i(83),i(5)),c=function(e,t,i,d){var o,a=arguments.length,r=a<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,d);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let p=class extends(Object(s.a)(o.a)(a.a)){stateChanged(e){this.todos=Object(r.a)(e),this.filter=e.filter}render(){return d["d"]`
            <style>
                wired-todo-view {
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                }
                wired-card {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 20px 10px 30px 10px;
                    height: 100%;
                    box-sizing: border-box;
                }
                
                div.add {
                    flex:min-content;
                    padding: 20px 40px 0 30px;
                    display: flex;
                    flex-direction: row;
                    box-sizing: border-box;
                    width: 100%;
                }
                
                div.add > wired-input {
                    flex: auto;
                }
                div.add > wired-button {
                    margin-left: 20px;
                }
                div.scroll {
                    display: inline-block;
                    flex: auto;
                    width: 100%;
                    box-sizing: border-box;
                }
                div.list {
                    display: inline-block;
                    padding: 20px 20px 0 50px;
                    width: 100%;
                    box-sizing: border-box;
                }
                
                
                div.row {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    padding-right: 40px;
                }
                
                div.row > wired-input {
                    flex: auto;
                }
                
                div.row > wired-checkbox {
                    width:50px;
                }
                
                div.filter {
                    flex:min-content;
                    //height: 100px;
                    padding: 20px 40px 30px 30px;
                }
                
                div.filter > wired-radio-group {
                    float: left;
                }
                div.filter > wired-button {
                    float: right;
                }
                
                div.layout {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: stretch;
                }
            </style>
            <wired-card id="card" mode="stretch">
            <div class="layout">
                <div class="add">
                    <wired-input id="addInput"
                        placeholder="Task"
                        value="${this.task||""}"
                        @change="${this.updateTask}"
                    ></wired-input>
                    <wired-button
                        @click="${this.addTodo}"
                    >Add Todo</wired-button>
                </div>
                <div class="scroll">      
                    <div class="list">                
                        ${this.todos.map(e=>d["d"]`
                                <div class="row">
                                    <wired-checkbox
                                        ?checked="${e.complete}"
                                    ></wired-checkbox>
                                    <wired-input class="list"
                                        @change="${t=>this.updateTodoValue(e,t.target.value)}" 
                                        value="${e.task}"
                                    ></wired-input>
                                </div>
                            `)}
                    </div>
                </div>
                <div class="filter">
                    <wired-radio-group
                        selected="${this.filter}"
                        @selected="${this.filterChanged}"
                    >
                        ${Object.values(n.a).map(e=>d["d"]`
                                    <wired-radio name="${e}">${e}</wired-radio>
                                `)}
                    </wired-radio-group>
                    <wired-button
                        
                    >Clear Complete</wired-button>
                </div>
                </div>
            </wired-card>
           
        `}filterChanged(e){console.log("Filter Changed: ",e.detail.selected),o.a.dispatch(new l.c(e.detail.selected))}updateTodoValue(e,t){o.a.dispatch(new l.e(e,t))}addTodo(){this.task&&(o.a.dispatch(new l.a(this.task)),this.task="",this.shadowRoot.getElementById("addInput").value="")}shortcutListener(e){"Enter"===e.key&&this.addTodo()}updateTask(e){this.task=e.target.value}updateTodoStatus(e,t){o.a.dispatch(new l.d(e,t))}clearCompleted(){o.a.dispatch(new l.b)}};c([Object(d.e)()],p.prototype,"todos",void 0),c([Object(d.e)()],p.prototype,"filter",void 0),c([Object(d.e)()],p.prototype,"task",void 0),p=c([Object(d.c)("wired-todo-view")],p)},99:function(e,t,i){"use strict";i.r(t);var d=i(13),o=i(43),a=i(27),r=i(33),s=(i(92),i(41));class n extends(Object(o.a)(a.a)(s.a)){constructor(){super(...arguments),this.hasTodos=!1}stateChanged(e){const t=Object(r.c)(e);this.chartConfig=[{name:"Completed",y:t.completed},{name:"Active",y:t.active}],this.hasTodos=e.todos.length>0}render(){return d["d"]`
      <style>
        :host {
          display: block;
        }
        #chart {
          margin: 50px auto;
        }
      </style>

      ${this.getChart()}
    `}getChart(){return this.hasTodos?d["d"]`
        <vaadin-chart type="pie">
          <vaadin-chart-series .values="${this.chartConfig}">
          </vaadin-chart-series>
        </vaadin-chart>
      `:d["d"]`
        <p>Nothing to do! 🌴</p>
      `}}(function(e,t,i,d){var o,a=arguments.length,r=a<3?t:null===d?d=Object.getOwnPropertyDescriptor(t,i):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,d);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);a>3&&r&&Object.defineProperty(t,i,r)})([Object(d.e)()],n.prototype,"chartConfig",void 0),customElements.define("stats-view",n)}}]);