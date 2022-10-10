(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var ngx_smooth_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-smooth-dnd */ 9652);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            ngx_smooth_dnd__WEBPACK_IMPORTED_MODULE_7__.NgxSmoothDnDModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ 9860);





const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod'];
const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
const pickColor = () => {
    const rand = Math.floor((Math.random() * 10));
    return cardColors[rand];
};
let HomePage = class HomePage {
    constructor() {
        this.scene = {
            type: 'container',
            props: {
                orientation: 'horizontal'
            },
            children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.generateItems)(4, (i) => ({
                id: `column${i}`,
                type: 'container',
                name: columnNames[i],
                props: {
                    orientation: 'vertical',
                    className: 'card-container'
                },
                children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.generateItems)(+(Math.random() * 10).toFixed() + 5, (j) => ({
                    type: 'draggable',
                    id: `${i}${j}`,
                    props: {
                        className: 'card',
                        style: { backgroundColor: pickColor() }
                    },
                    data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
                }))
            }))
        };
        this.items = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.generateItems)(50, i => ({ data: 'Draggable ' + i }));
    }
    onColumnDrop(dropResult) {
        const scene = Object.assign({}, this.scene);
        scene.children = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.applyDrag)(scene.children, dropResult);
        this.scene = scene;
    }
    onCardDrop(columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            const scene = Object.assign({}, this.scene);
            const column = scene.children.filter(p => p.id === columnId)[0];
            const columnIndex = scene.children.indexOf(column);
            const newColumn = Object.assign({}, column);
            newColumn.children = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.applyDrag)(newColumn.children, dropResult);
            scene.children.splice(columnIndex, 1, newColumn);
            this.scene = scene;
        }
    }
    getCardPayload(columnId) {
        return (index) => {
            return this.scene.children.filter(p => p.id === columnId)[0].children[index];
        };
    }
    log(...params) {
        console.log(...params);
    }
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9860:
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyDrag": () => (/* binding */ applyDrag),
/* harmony export */   "generateItems": () => (/* binding */ generateItems)
/* harmony export */ });
const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null)
        return arr;
    const result = [...arr];
    let itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};
const generateItems = (count, creator) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};


/***/ }),

/***/ 9652:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-smooth-dnd/__ivy_ngcc__/fesm2015/ngx-smooth-dnd.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent),
/* harmony export */   "DraggableComponent": () => (/* binding */ DraggableComponent),
/* harmony export */   "NgxSmoothDnDModule": () => (/* binding */ NgxSmoothDnDModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-dnd */ 2997);
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_dnd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in smooth_dnd__WEBPACK_IMPORTED_MODULE_0__) if(["default","ContainerComponent","DraggableComponent","NgxSmoothDnDModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => smooth_dnd__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





const _c0 = ["draggableWrapper"];
const _c1 = ["*"];
const _c2 = ["container"];

const {
  wrapperClass,
  animationClass
} = smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.constants;
const constantClasses = {
  [wrapperClass]: true,
  [animationClass]: true
};
let DraggableComponent = class DraggableComponent {
  ngAfterViewInit() {
    this.wrapper.nativeElement.parentNode.className = smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.constants.wrapperClass;
  }

};

DraggableComponent.ɵfac = function DraggableComponent_Factory(t) {
  return new (t || DraggableComponent)();
};

DraggableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DraggableComponent,
  selectors: [["smooth-dnd-draggable"]],
  viewQuery: function DraggableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
    }
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["draggableWrapper", ""]],
  template: function DraggableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
  },
  encapsulation: 2
});

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('draggableWrapper', {
  static: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)], DraggableComponent.prototype, "wrapper", void 0);

smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.smoothDnD.dropHandler = smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.dropHandlers.reactDropHandler().handler;
smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.smoothDnD.wrapChild = false;
let ContainerComponent = class ContainerComponent {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dropReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }

  ngAfterViewInit() {
    this.container = (0,smooth_dnd__WEBPACK_IMPORTED_MODULE_0__.smoothDnD)(this.containerElementRef.nativeElement, this.getOptions());
    if (this.useTransformForGhost) this.container.useTransformForGhost = this.useTransformForGhost;
  }

  ngOnDestroy() {
    this.container.dispose();
  }

  getOptions() {
    const options = {};
    if (this.orientation) options.orientation = this.orientation;
    if (this.behaviour) options.behaviour = this.behaviour;
    if (this.groupName) options.groupName = this.groupName;
    if (this.lockAxis) options.lockAxis = this.lockAxis;
    if (this.dragHandleSelector) options.dragHandleSelector = this.dragHandleSelector;
    if (this.nonDragAreaSelector) options.nonDragAreaSelector = this.nonDragAreaSelector;
    if (this.dragBeginDelay) options.dragBeginDelay = this.dragBeginDelay;
    if (this.animationDuration) options.animationDuration = this.animationDuration;
    if (this.autoScrollEnabled) options.autoScrollEnabled = this.autoScrollEnabled;
    if (this.dragClass) options.dragClass = this.dragClass;
    if (this.dropClass) options.dropClass = this.dropClass;
    if (this.dropPlaceholder) options.dropPlaceholder = this.dropPlaceholder;
    if (this.dragStart) options.onDragStart = info => {
      this.getNgZone(() => {
        this.dragStart.emit(info);
      });
    };
    if (this.dragEnd) options.onDragEnd = info => {
      this.getNgZone(() => {
        this.dragEnd.emit(info);
      });
    };
    if (this.drop) options.onDrop = dropResult => {
      this.getNgZone(() => {
        this.drop.emit(dropResult);
      });
    };
    if (this.getChildPayload) options.getChildPayload = this.getChildPayload;
    if (this.shouldAnimateDrop) options.shouldAnimateDrop = this.shouldAnimateDrop;
    if (this.shouldAcceptDrop) options.shouldAcceptDrop = this.shouldAcceptDrop;
    if (this.dragEnter) options.onDragEnter = () => this.getNgZone(() => this.dragEnter.emit());
    if (this.dragLeave) options.onDragLeave = () => this.getNgZone(() => this.dragLeave.emit());
    if (this.dropReady) options.onDropReady = dropResult => {
      this.getNgZone(() => {
        this.dropReady.emit(dropResult);
      });
    };
    if (this.getGhostParent) options.getGhostParent = this.getGhostParent;
    return options;
  }

  getNgZone(clb) {
    this._ngZone.run(() => {
      clb();
    });
  }

};

ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
  return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};

ContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContainerComponent,
  selectors: [["smooth-dnd-container"]],
  contentQueries: function ContainerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DraggableComponent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    }
  },
  viewQuery: function ContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
    }
  },
  inputs: {
    orientation: "orientation",
    behaviour: "behaviour",
    groupName: "groupName",
    lockAxis: "lockAxis",
    dragHandleSelector: "dragHandleSelector",
    nonDragAreaSelector: "nonDragAreaSelector",
    dragBeginDelay: "dragBeginDelay",
    animationDuration: "animationDuration",
    autoScrollEnabled: "autoScrollEnabled",
    dragClass: "dragClass",
    dropClass: "dropClass",
    dropPlaceholder: "dropPlaceholder",
    removeOnDropOut: "removeOnDropOut",
    useTransformForGhost: "useTransformForGhost",
    getChildPayload: "getChildPayload",
    shouldAnimateDrop: "shouldAnimateDrop",
    shouldAcceptDrop: "shouldAcceptDrop",
    getGhostParent: "getGhostParent"
  },
  outputs: {
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    drop: "drop",
    dropReady: "dropReady",
    dragEnter: "dragEnter",
    dragLeave: "dragLeave"
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["container", ""]],
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

ContainerComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
}];

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren)(DraggableComponent), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__.QueryList)], ContainerComponent.prototype, "draggables", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)("container", {
  static: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)], ContainerComponent.prototype, "containerElementRef", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("orientation"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "orientation", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("behaviour"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "behaviour", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("groupName"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "groupName", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("lockAxis"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "lockAxis", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("dragHandleSelector"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragHandleSelector", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("nonDragAreaSelector"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "nonDragAreaSelector", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("dragBeginDelay"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragBeginDelay", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("animationDuration"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "animationDuration", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("autoScrollEnabled"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "autoScrollEnabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("dragClass"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragClass", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("dropClass"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dropClass", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("dropPlaceholder"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dropPlaceholder", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("removeOnDropOut"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "removeOnDropOut", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)("useTransformForGhost"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "useTransformForGhost", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "drop", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dropReady", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)], ContainerComponent.prototype, "getChildPayload", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)], ContainerComponent.prototype, "shouldAnimateDrop", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)], ContainerComponent.prototype, "shouldAcceptDrop", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragEnter", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], ContainerComponent.prototype, "dragLeave", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)], ContainerComponent.prototype, "getGhostParent", void 0);

ContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone])], ContainerComponent);
let NgxSmoothDnDModule = class NgxSmoothDnDModule {};

NgxSmoothDnDModule.ɵfac = function NgxSmoothDnDModule_Factory(t) {
  return new (t || NgxSmoothDnDModule)();
};

NgxSmoothDnDModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxSmoothDnDModule
});
NgxSmoothDnDModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      // tslint:disable-next-line:component-selector
      selector: 'smooth-dnd-draggable',
      template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
    }]
  }], null, {
    wrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['draggableWrapper', {
        static: true
      }]
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      // tslint:disable-next-line:component-selector
      selector: "smooth-dnd-container",
      template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    drop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dropReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [DraggableComponent]
    }],
    containerElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["orientation"]
    }],
    behaviour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["behaviour"]
    }],
    groupName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["groupName"]
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["lockAxis"]
    }],
    dragHandleSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dragHandleSelector"]
    }],
    nonDragAreaSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["nonDragAreaSelector"]
    }],
    dragBeginDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dragBeginDelay"]
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["animationDuration"]
    }],
    autoScrollEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["autoScrollEnabled"]
    }],
    dragClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dragClass"]
    }],
    dropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dropClass"]
    }],
    dropPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["dropPlaceholder"]
    }],
    removeOnDropOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["removeOnDropOut"]
    }],
    useTransformForGhost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["useTransformForGhost"]
    }],
    getChildPayload: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shouldAnimateDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shouldAcceptDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    getGhostParent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxSmoothDnDModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [ContainerComponent, DraggableComponent],
      exports: [ContainerComponent, DraggableComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxSmoothDnDModule, {
    declarations: function () {
      return [ContainerComponent, DraggableComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
    },
    exports: function () {
      return [ContainerComponent, DraggableComponent];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2997:
/*!***********************************************!*\
  !*** ./node_modules/smooth-dnd/dist/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

!function (e, t) {
   true ? t(exports) : 0;
}(this, function (e) {
  "use strict";

  var l,
      t,
      r = "smooth-dnd-container-instance",
      b = "smooth-dnd-draggable-wrapper",
      o = "animated",
      p = "__smooth_dnd_draggable_translation_value",
      u = "__smooth_dnd_draggable_visibility_value",
      C = "smooth-dnd-ghost",
      w = "smooth-dnd-container",
      d = "smooth-dnd-extra-size-for-insertion",
      v = "smooth-dnd-stretcher-element",
      h = "smooth-dnd-stretcher-instance",
      s = "smooth-dnd-disable-touch-action",
      c = "smooth-dnd-no-user-select",
      i = "smooth-dnd-prevent-auto-scroll-class",
      y = "smooth-dnd-drop-preview-default-class",
      x = "smooth-dnd-drop-preview-inner-class",
      E = "smooth-dnd-drop-preview-constant-class",
      D = "smooth-dnd-drop-preview-flex-container-class",
      n = Object.freeze({
    containerInstance: r,
    defaultGroupName: "@@smooth-dnd-default-group@@",
    wrapperClass: b,
    defaultGrabHandleClass: "smooth-dnd-default-grap-handle",
    animationClass: o,
    translationValue: p,
    visibilityValue: u,
    ghostClass: C,
    containerClass: w,
    extraSizeForInsertion: d,
    stretcherElementClass: v,
    stretcherElementInstance: h,
    isDraggableDetached: "smoth-dnd-is-draggable-detached",
    disbaleTouchActions: s,
    noUserSelectClass: c,
    preventAutoScrollClass: i,
    dropPlaceholderDefaultClass: y,
    dropPlaceholderInnerClass: x,
    dropPlaceholderWrapperClass: E,
    dropPlaceholderFlexContainerClass: D
  }),
      S = {
    groupName: void 0,
    behaviour: "move",
    orientation: "vertical",
    getChildPayload: void 0,
    animationDuration: 250,
    autoScrollEnabled: !0,
    shouldAcceptDrop: void 0,
    shouldAnimateDrop: void 0
  };

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function g(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  (t = l || (l = {})).x = "x", t.y = "y", t.xy = "xy";

  var O = function (e, t) {
    return {
      left: Math.max(e.left, t.left),
      top: Math.max(e.top, t.top),
      right: Math.min(e.right, t.right),
      bottom: Math.min(e.bottom, t.bottom)
    };
  },
      m = function (e, t, n) {
    return "x" === n ? {
      left: Math.max(e.left, t.left),
      top: e.top,
      right: Math.min(e.right, t.right),
      bottom: e.bottom
    } : {
      left: e.left,
      top: Math.max(e.top, t.top),
      right: e.right,
      bottom: Math.min(e.bottom, t.bottom)
    };
  },
      R = function (e) {
    var t = e.getBoundingClientRect(),
        n = {
      left: t.left,
      right: t.right,
      top: t.top,
      bottom: t.bottom
    };

    if (P(e, "x") && !B(e, "x")) {
      var o = n.right - n.left;
      n.right = n.right + e.scrollWidth - o;
    }

    if (P(e, "y") && !B(e, "y")) {
      var r = n.bottom - n.top;
      n.bottom = n.bottom + e.scrollHeight - r;
    }

    return n;
  },
      A = function (e) {
    var t = window.getComputedStyle(e),
        n = t.overflow;
    if ("auto" === n || "scroll" === n) return l.xy;
    var o = t["overflow-x"],
        r = "auto" === o || "scroll" === o,
        i = t["overflow-y"],
        a = "auto" === i || "scroll" === i;
    return r && a ? l.xy : r ? l.x : a ? l.y : null;
  },
      I = function (e, t) {
    var n = window.getComputedStyle(e),
        o = n.overflow,
        r = n["overflow-".concat(t)];
    return "auto" === o || "scroll" === o || "auto" === r || "scroll" === r;
  },
      B = function (e, t) {
    var n = window.getComputedStyle(e),
        o = n.overflow,
        r = n["overflow-".concat(t)];
    return "auto" === o || "scroll" === o || "hidden" === o || "auto" === r || "scroll" === r || "hidden" === r;
  },
      P = function (e, t) {
    return "x" === t ? e.scrollWidth > e.clientWidth : e.scrollHeight > e.clientHeight;
  },
      T = function (e, t) {
    var n = e,
        o = t || R(e);

    for (n = e.parentElement; n;) P(n, "x") && B(n, "x") && (o = m(o, n.getBoundingClientRect(), "x")), P(n, "y") && B(n, "y") && (o = m(o, n.getBoundingClientRect(), "y")), n = n.parentElement;

    return o;
  },
      z = function (e, n) {
    for (var o = e; o;) {
      if (o[r]) {
        var t = function () {
          var t = o[r];
          if (n.some(function (e) {
            return e === t;
          })) return {
            v: t
          };
        }();

        if ("object" === a(t)) return t.v;
      }

      o = o.parentElement;
    }

    return null;
  },
      N = function (e, t) {
    for (var n = e; n;) {
      if (n.matches(t)) return n;
      n = n.parentElement;
    }

    return null;
  },
      L = function (e, t) {
    return -1 < e.className.split(" ").map(function (e) {
      return e;
    }).indexOf(t);
  },
      M = function (e, t) {
    if (e) {
      var n = e.className.split(" ").filter(function (e) {
        return e;
      });
      -1 === n.indexOf(t) && (n.unshift(t), e.className = n.join(" "));
    }
  },
      j = function (e, t) {
    if (e) {
      var n = e.className.split(" ").filter(function (e) {
        return e && e !== t;
      });
      e.className = n.join(" ");
    }
  },
      _ = function (e, t) {
    return e.removeChild(e.children[t]);
  },
      F = function (e, t, n) {
    n >= e.children.length ? e.appendChild(t) : e.insertBefore(t, e.children[n]);
  },
      V = function () {
    window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : window.document.selection && window.document.selection.empty();
  },
      X = function (e) {
    if (e) {
      var t = window.getComputedStyle(e);
      if (t) return t.cursor;
    }

    return null;
  };

  function H(e) {
    return !(e.bottom <= e.top || e.right <= e.left);
  }

  function Y(e) {
    var s = e.element,
        c = e.draggables;
    return function (e, t) {
      var n = e,
          o = n.removedIndex,
          r = n.addedIndex,
          i = n.droppedElement,
          a = null;

      if (null !== o && (a = _(s, o), c.splice(o, 1)), null !== r) {
        var l = window.document.createElement("div");
        l.className = "".concat(b), l.appendChild(a && a.firstElementChild ? a.firstElementChild : i), F(s, l, r), r >= c.length ? c.push(l) : c.splice(r, 0, l);
      }

      t && t(e);
    };
  }

  var k = Object.freeze({
    domDropHandler: Y,
    reactDropHandler: function () {
      return {
        handler: function () {
          return function (e, t) {
            t && t(e);
          };
        }
      };
    }
  }),
      G = {
    size: "offsetWidth",
    distanceToParent: "offsetLeft",
    translate: "transform",
    begin: "left",
    end: "right",
    dragPosition: "x",
    scrollSize: "scrollWidth",
    offsetSize: "offsetWidth",
    scrollValue: "scrollLeft",
    scale: "scaleX",
    setSize: "width",
    setters: {
      translate: function (e) {
        return "translate3d(".concat(e, "px, 0, 0)");
      }
    }
  },
      W = {
    size: "offsetHeight",
    distanceToParent: "offsetTop",
    translate: "transform",
    begin: "top",
    end: "bottom",
    dragPosition: "y",
    scrollSize: "scrollHeight",
    offsetSize: "offsetHeight",
    scrollValue: "scrollTop",
    scale: "scaleY",
    setSize: "height",
    setters: {
      translate: function (e) {
        return "translate3d(0,".concat(e, "px, 0)");
      }
    }
  };

  function q(o, s, e) {
    o[d] = 0;
    var r,
        i = (r = "horizontal" === s ? G : W, {
      get: function (e, t) {
        return e[r[t] || t];
      },
      set: function (e, t, n) {
        e[r[t]] = r.setters[t] ? r.setters[t](n) : n;
      }
    }),
        c = {
      translation: 0
    };

    function t() {
      var e, t;
      n(o), t = (e = o).getBoundingClientRect(), c.scaleX = e.offsetWidth ? (t.right - t.left) / e.offsetWidth : 1, c.scaleY = e.offsetHeight ? (t.bottom - t.top) / e.offsetHeight : 1;
    }

    function n(e) {
      c.rect = R(e);
      var t = T(e, c.rect);
      H(t) && (c.lastVisibleRect = c.visibleRect), c.visibleRect = t;
    }

    function a(e) {
      var t = e;

      if (t.tagName) {
        var n = t.getBoundingClientRect();
        return "vertical" === s ? n.bottom - n.top : n.right - n.left;
      }

      return i.get(e, "size") * i.get(c, "scale");
    }

    function l(e) {
      return i.get(e, "dragPosition");
    }

    return window.addEventListener("resize", function () {
      n(o);
    }), setTimeout(function () {
      t();
    }, 10), {
      getSize: a,
      getContainerRectangles: function () {
        return {
          rect: c.rect,
          visibleRect: c.visibleRect,
          lastVisibleRect: c.lastVisibleRect
        };
      },
      getBeginEndOfDOMRect: function (e) {
        return {
          begin: i.get(e, "begin"),
          end: i.get(e, "end")
        };
      },
      getBeginEndOfContainer: function () {
        return {
          begin: i.get(c.rect, "begin") + c.translation,
          end: i.get(c.rect, "end") + c.translation
        };
      },
      getBeginEndOfContainerVisibleRect: function () {
        return {
          begin: i.get(c.visibleRect, "begin") + c.translation,
          end: i.get(c.visibleRect, "end") + c.translation
        };
      },
      getBeginEnd: function (e) {
        var t,
            n = (t = e, (i.get(t, "distanceToParent") + (t[p] || 0)) * i.get(c, "scale") + (i.get(c.rect, "begin") + c.translation) - i.get(o, "scrollValue"));
        return {
          begin: n,
          end: n + a(e) * i.get(c, "scale")
        };
      },
      getAxisValue: l,
      setTranslation: function (e, t) {
        t ? i.set(e.style, "translate", t) : e.style.removeProperty("transform"), e[p] = t;
      },
      getTranslation: function (e) {
        return e[p];
      },
      setVisibility: function (e, t) {
        void 0 !== e[u] && e[u] === t || (t ? e.style.removeProperty("visibility") : e.style.visibility = "hidden", e[u] = t);
      },
      isVisible: function (e) {
        return void 0 === e[u] || e[u];
      },
      isInVisibleRect: function (e, t) {
        var n = c.visibleRect,
            o = n.left,
            r = n.top,
            i = n.right,
            a = n.bottom;
        a - r < 2 && (a = r + 30);
        var l = c.rect;
        return "vertical" === s ? e > l.left && e < l.right && r < t && t < a : o < e && e < i && t > l.top && t < l.bottom;
      },
      setSize: function (e, t) {
        i.set(e, "setSize", t);
      },
      getTopLeftOfElementBegin: function (e) {
        var t = 0;
        return {
          top: "horizontal" === s ? (t = e, c.rect.top) : (t = c.rect.left, e),
          left: t
        };
      },
      getScrollSize: function (e) {
        return i.get(e, "scrollSize");
      },
      getScrollValue: function (e) {
        return i.get(e, "scrollValue");
      },
      setScrollValue: function (e, t) {
        return i.set(e, "scrollValue", t);
      },
      invalidate: t,
      invalidateRects: function () {
        n(o);
      },
      getPosition: function (e) {
        return l(e);
      },
      setBegin: function (e, t) {
        i.set(e, "begin", t);
      }
    };
  }

  function U(e, t, n) {
    var o,
        r,
        i,
        a = n.left,
        l = n.right,
        s = n.top,
        c = n.bottom,
        u = e.x,
        d = e.y;
    if (u < a || l < u || d < s || c < d) return null;
    i = "x" === t ? (o = a, r = l, u) : (o = s, r = c, d);
    var f = r - o,
        g = 400 < f ? 100 : f / 4;
    return r - i < g ? {
      direction: "end",
      speedFactor: (g - (r - i)) / g
    } : i - o < g ? {
      direction: "begin",
      speedFactor: (g - (i - o)) / g
    } : null;
  }

  var J = function (l) {
    var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "y",
        c = null,
        u = null,
        d = null,
        f = null;
    return {
      animate: function (e, t) {
        d = e, f = t, function a() {
          null === c && (c = requestAnimationFrame(function (e) {
            null === u && (u = e);
            var t = e - u;
            u = e;
            var n,
                o,
                r,
                i = t / 1e3 * f;
            o = s, r = i = "begin" === d ? 0 - i : i, (n = l) && (n !== window ? "x" === o ? n.scrollLeft += r : n.scrollTop += r : "x" === o ? n.scrollBy(r, 0) : n.scrollBy(0, r)), c = null, a();
          }));
        }();
      },
      stop: function () {
        null !== c && (cancelAnimationFrame(c), c = null), u = null;
      }
    };
  };

  function K(e) {
    return function () {
      return T(e, e.getBoundingClientRect());
    };
  }

  var Q,
      Z,
      $,
      ee = function (e) {
    var u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1500,
        a = e.reduce(function (e, t) {
      var n = function (e) {
        for (var t = [], n = e.element; n;) {
          var o = A(n);

          if (o && !L(n, i)) {
            var r = {};

            switch (o) {
              case l.xy:
                r.x = {
                  animator: J(n, "x")
                }, r.y = {
                  animator: J(n, "y")
                };
                break;

              case l.x:
                r.x = {
                  animator: J(n, "x")
                };
                break;

              case l.y:
                r.y = {
                  animator: J(n, "y")
                };
            }

            t.push({
              axisAnimations: r,
              getRect: K(n),
              scrollerElement: n
            });
          }

          n = n.parentElement;
        }

        return t;
      }(t).filter(function (t) {
        return !e.find(function (e) {
          return e.scrollerElement === t.scrollerElement;
        });
      });

      return [].concat(g(e), g(n));
    }, []);
    return function (e) {
      var t,
          o,
          n = e.draggableInfo;
      if (e.reset) a.forEach(function (e) {
        e.axisAnimations.x && e.axisAnimations.x.animator.stop(), e.axisAnimations.y && e.axisAnimations.y.animator.stop();
      });else if (n) {
        t = a, o = n.mousePosition, t.forEach(function (e) {
          var t = e.axisAnimations,
              n = (0, e.getRect)();
          t.x && (t.x.scrollParams = U(o, "x", n), e.cachedRect = n), t.y && (t.y.scrollParams = U(o, "y", n), e.cachedRect = n);
        }), a.forEach(function (e) {
          var t = e.axisAnimations,
              n = t.x,
              o = t.y;
          if (n) if (n.scrollParams) {
            var r = n.scrollParams,
                i = r.direction,
                a = r.speedFactor;
            n.animator.animate(i, a * u);
          } else n.animator.stop();
          if (o) if (o.scrollParams) {
            var l = o.scrollParams,
                s = l.direction,
                c = l.speedFactor;
            o.animator.animate(s, c * u);
          } else o.animator.stop();
        });
        var r = a.filter(function (e) {
          return e.cachedRect;
        });

        if (r.length && 1 < r.length) {
          var i = function (e, t) {
            for (var n = document.elementFromPoint(t.x, t.y); n;) {
              var o = e.find(function (e) {
                return e.scrollerElement === n;
              });
              if (o) return o;
              n = n.parentElement;
            }

            return null;
          }(r, n.mousePosition);

          i && r.forEach(function (e) {
            e !== i && (e.axisAnimations.x && e.axisAnimations.x.animator.stop(), e.axisAnimations.y && e.axisAnimations.y.animator.stop());
          });
        }
      }
    };
  };

  "undefined" != typeof window && ((Q = Node || Element) && Q.prototype && !Q.prototype.matches && (Q.prototype.matches = Q.prototype.matchesSelector || Q.prototype.mozMatchesSelector || Q.prototype.msMatchesSelector || Q.prototype.oMatchesSelector || Q.prototype.webkitMatchesSelector || function (e) {
    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);

    return -1 < n;
  }), (Z = Node || Element) && Z.prototype && null == Z.prototype.firstElementChild && Object.defineProperty(Z.prototype, "firstElementChild", {
    get: function () {
      for (var e, t = this.childNodes, n = 0; e = t[n++];) if (1 === e.nodeType) return e;

      return null;
    }
  }), Array.prototype.some || (Array.prototype.some = function (e) {
    if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
    if ("function" != typeof e) throw new TypeError();

    for (var t = Object(this), n = t.length >>> 0, o = 2 <= arguments.length ? arguments[1] : void 0, r = 0; r < n; r++) if (r in t && e.call(o, t[r], r, t)) return !0;

    return !1;
  }));
  var te = {
    overflow: "hidden",
    display: "block"
  },
      ne = {
    height: "100%",
    display: "table-cell",
    "vertical-align": "top"
  },
      oe = (f($ = {}, ".".concat(w), {
    position: "relative",
    "min-height": "30px",
    "min-width": "30px"
  }), f($, ".".concat(w, ".horizontal"), {
    display: "table"
  }), f($, ".".concat(w, ".horizontal > .").concat(v), {
    display: "inline-block"
  }), f($, ".".concat(w, ".horizontal > .").concat(b), ne), f($, ".".concat(w, ".vertical > .").concat(b), te), f($, ".".concat(b), {
    "box-sizing": "border-box"
  }), f($, ".".concat(b, ".horizontal"), ne), f($, ".".concat(b, ".vertical"), te), f($, ".".concat(b, ".animated"), {
    transition: "transform ease"
  }), f($, ".".concat(C), {
    "box-sizing": "border-box"
  }), f($, ".".concat(C, ".animated"), {
    transition: "all ease-in-out"
  }), f($, ".".concat(C, " *"), {
    "pointer-events": "none"
  }), f($, ".".concat(s, " *"), {
    "touch-actions": "none",
    "-ms-touch-actions": "none"
  }), f($, ".".concat(c), {
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none"
  }), f($, ".".concat(x), {
    flex: "1"
  }), f($, ".".concat(w, ".horizontal > .").concat(E), {
    height: "100%",
    overflow: "hidden",
    display: "table-cell",
    "vertical-align": "top"
  }), f($, ".".concat(w, ".vertical > .").concat(E), {
    overflow: "hidden",
    display: "block",
    width: "100%"
  }), f($, ".".concat(D), {
    width: "100%",
    height: "100%",
    display: "flex",
    "justify-content": "stretch",
    "align-items": "stretch"
  }), f($, ".".concat(y), {
    "background-color": "rgba(150, 150, 150, 0.1)",
    border: "1px solid #ccc"
  }), $);

  function re(o) {
    return Object.keys(o).reduce(function (e, t) {
      var n = o[t];
      return "object" === a(n) ? "".concat(e).concat(t, "{").concat(re(n), "}") : "".concat(e).concat(t, ":").concat(n, ";");
    }, "");
  }

  function ie(e) {
    if (e && "undefined" != typeof window) {
      var t = window.document.head || window.document.getElementsByTagName("head")[0],
          n = window.document.createElement("style"),
          o = re({
        "body *": {
          cursor: "".concat(e, " !important")
        }
      });
      return n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(window.document.createTextNode(o)), t.appendChild(n), n;
    }

    return null;
  }

  var ae,
      le,
      se = ["mousedown", "touchstart"],
      ce = ["mousemove", "touchmove"],
      ue = ["mouseup", "touchend"],
      de = null,
      fe = null,
      ge = null,
      me = null,
      pe = [],
      ve = !1,
      he = !1,
      ye = !1,
      be = !1,
      we = null,
      xe = null,
      Ee = null,
      Ce = null,
      De = (ae = null, le = !1, {
    start: function () {
      le || (le = !0, function e() {
        ae = requestAnimationFrame(function () {
          de.forEach(function (e) {
            return e.layout.invalidateRects();
          }), setTimeout(function () {
            null !== ae && e();
          }, 50);
        });
      }());
    },
    stop: function () {
      null !== ae && (cancelAnimationFrame(ae), ae = null), le = !1;
    }
  }),
      Se = "undefined" != typeof window && !!(window.navigator.userAgent.match(/Android/i) || window.navigator.userAgent.match(/webOS/i) || window.navigator.userAgent.match(/iPhone/i) || window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPod/i) || window.navigator.userAgent.match(/BlackBerry/i) || window.navigator.userAgent.match(/Windows Phone/i));

  function Oe() {
    "undefined" != typeof window && se.forEach(function (e) {
      window.document.addEventListener(e, Ie, {
        passive: !1
      });
    });
  }

  function Re() {
    return me && me.ghostParent ? me.ghostParent : fe && fe.parentElement || window.document.body;
  }

  var Ae = function () {
    var r,
        i,
        o,
        a = null,
        l = 1,
        s = 5;

    function c(e) {
      var t = _e(e),
          n = t.clientX,
          o = t.clientY;

      if (i) (Math.abs(r.clientX - n) > s || Math.abs(r.clientY - o) > s) && f();else if (Math.abs(r.clientX - n) > l || Math.abs(r.clientY - o) > l) return g();
    }

    function u() {
      f();
    }

    function d() {
      f();
    }

    function f() {
      clearTimeout(a), ce.forEach(function (e) {
        return window.document.removeEventListener(e, c);
      }, {
        passive: !1
      }), ue.forEach(function (e) {
        return window.document.removeEventListener(e, u);
      }, {
        passive: !1
      }), window.document.removeEventListener("drag", d, {
        passive: !1
      });
    }

    function g() {
      clearTimeout(a), f(), o();
    }

    return function (e, t, n) {
      r = _e(e), o = n, (i = "number" == typeof t ? t : Se ? 200 : 0) && (a = setTimeout(g, i)), ce.forEach(function (e) {
        return window.document.addEventListener(e, c);
      }, {
        passive: !1
      }), ue.forEach(function (e) {
        return window.document.addEventListener(e, u);
      }, {
        passive: !1
      }), window.document.addEventListener("drag", d, {
        passive: !1
      });
    };
  }();

  function Ie(e) {
    var t = _e(e);

    if (!ve && (void 0 === t.button || 0 === t.button) && (fe = N(t.target, "." + b))) {
      var n = N(fe, "." + w),
          o = pe.filter(function (e) {
        return e.element === n;
      })[0],
          r = o.getOptions().dragHandleSelector,
          i = o.getOptions().nonDragAreaSelector,
          a = !0;

      if (r && !N(t.target, r) && (a = !1), i && N(t.target, i) && (a = !1), a) {
        M(window.document.body, s), M(window.document.body, c);
        window.document.addEventListener("mouseup", function e() {
          j(window.document.body, s), j(window.document.body, c), window.document.removeEventListener("mouseup", e);
        });
      }

      a && Ae(t, o.getOptions().dragBeginDelay, function () {
        V(), Ye(t, X(e.target)), ce.forEach(function (e) {
          window.document.addEventListener(e, Be, {
            passive: !1
          });
        }), ue.forEach(function (e) {
          window.document.addEventListener(e, je, {
            passive: !1
          });
        });
      });
    }
  }

  function Be(e) {
    e.preventDefault();

    var t = _e(e);

    if (me) {
      var n = me.container.getOptions();
      "contain" === n.behaviour ? function (e) {
        var t,
            n,
            o,
            r,
            i = e.clientX,
            a = e.clientY,
            l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "vertical",
            s = me.container.layout.getBeginEndOfContainerVisibleRect();
        r = "vertical" === l ? (t = a, n = "y", o = "top", me.size.offsetHeight) : (t = i, n = "x", o = "left", me.size.offsetWidth);
        var c = s.begin,
            u = s.end - r,
            d = Math.max(c, Math.min(u, t + ge.positionDelta[o]));
        ge.topLeft[n] = d, me.position[n] = Math.max(s.begin, Math.min(s.end, t + ge.centerDelta[n])), me.mousePosition[n] = Math.max(s.begin, Math.min(s.end, t)), me.position[n] < s.begin + r / 2 && (me.position[n] = s.begin + 2), me.position[n] > s.end - r / 2 && (me.position[n] = s.end - 2);
      }(t, n.orientation) : Ee ? "y" === Ee ? (ge.topLeft.y = t.clientY + ge.positionDelta.top, me.position.y = t.clientY + ge.centerDelta.y, me.mousePosition.y = t.clientY) : "x" === Ee && (ge.topLeft.x = t.clientX + ge.positionDelta.left, me.position.x = t.clientX + ge.centerDelta.x, me.mousePosition.x = t.clientX) : (ge.topLeft.x = t.clientX + ge.positionDelta.left, ge.topLeft.y = t.clientY + ge.positionDelta.top, me.position.x = t.clientX + ge.centerDelta.x, me.position.y = t.clientY + ge.centerDelta.y, me.mousePosition.x = t.clientX, me.mousePosition.y = t.clientY), Ge(), (be = !we(me)) && Le();
    } else Ye(t, X(e.target));
  }

  var Pe,
      Te,
      ze,
      Ne,
      Le = (Pe = Me, ze = !(Te = 20), Ne = null, function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

    Ne && clearTimeout(Ne), ze && !Ne ? Pe.call.apply(Pe, [null].concat(t)) : Ne = setTimeout(function () {
      Ne = null, Pe.call.apply(Pe, [null].concat(t));
    }, Te);
  });

  function Me() {
    be && (be = !1, Fe(me, de));
  }

  function je() {
    var e;
    ce.forEach(function (e) {
      window.document.removeEventListener(e, Be, {
        passive: !1
      });
    }), ue.forEach(function (e) {
      window.document.removeEventListener(e, je, {
        passive: !1
      });
    }), xe({
      reset: !0
    }), Ce && ((e = Ce) && "undefined" != typeof window && (window.document.head || window.document.getElementsByTagName("head")[0]).removeChild(e), Ce = null), me && (De.stop(), Me(), ye = !0, function (e) {
      function i() {
        j(ge.ghost, "animated"), ge.ghost.style.transitionDuration = null, Re().removeChild(ge.ghost), e();
      }

      function t(e, t, n) {
        var o = e.top,
            r = e.left;
        M(ge.ghost, "animated"), n && M(ge.ghost.firstElementChild, n), ge.topLeft.x = r, ge.topLeft.y = o, Ge(t), setTimeout(function () {
          i();
        }, t + 20);
      }

      function n(e, t) {
        M(ge.ghost, "animated"), Ge(e, .9, !0), setTimeout(function () {
          t();
        }, e + 20);
      }

      if (me.targetElement) {
        var o = pe.filter(function (e) {
          return e.element === me.targetElement;
        })[0];
        !(p = o.getOptions()).shouldAnimateDrop || p.shouldAnimateDrop(me.container.getOptions(), me.payload) ? t(o.getDragResult().shadowBeginEnd.rect, Math.max(150, o.getOptions().animationDuration / 2), o.getOptions().dropClass) : i();
      } else {
        var r = pe.filter(function (e) {
          return e === me.container;
        })[0];

        if (r) {
          var a = r.getOptions(),
              l = a.behaviour,
              s = a.removeOnDropOut;
          if ("move" !== l && "contain" !== l || !he && s || !r.getDragResult()) n(r.getOptions().animationDuration, i);else {
            var c = r.layout.getContainerRectangles();
            if (!H(c.visibleRect) && H(c.lastVisibleRect)) t({
              top: c.lastVisibleRect.top,
              left: c.lastVisibleRect.left
            }, r.getOptions().animationDuration, r.getOptions().dropClass);else {
              var u = r.getDragResult(),
                  d = u.removedIndex,
                  f = u.elementSize,
                  g = r.layout;
              r.getTranslateCalculator({
                dragResult: {
                  removedIndex: d,
                  addedIndex: d,
                  elementSize: f,
                  pos: void 0,
                  shadowBeginEnd: void 0
                }
              });
              var m = 0 < d ? g.getBeginEnd(r.draggables[d - 1]).end : g.getBeginEndOfContainer().begin;
              t(g.getTopLeftOfElementBegin(m), r.getOptions().animationDuration, r.getOptions().dropClass);
            }
          }
        } else n(S.animationDuration, i);
      }

      var p;
    }(function () {
      He(ve = !1);

      for (var e = de || [], t = e.shift(); void 0 !== t;) t.handleDrop(me), t = e.shift();

      we = Ee = me = ge = fe = de = null, ye = !1;
    }));
  }

  function _e(e) {
    return e.touches ? e.touches[0] : e;
  }

  function Fe(n, e) {
    var o = !1;
    e.forEach(function (e) {
      var t = e.handleDrag(n);
      o = !!t.containerBoxChanged || !1, t.containerBoxChanged = !1;
    }), o && (o = !1, requestAnimationFrame(function () {
      pe.forEach(function (e) {
        e.layout.invalidateRects(), e.onTranslated();
      });
    }));
  }

  function Ve(e) {
    var t = e,
        n = null;
    return function (e) {
      return !(null !== n || !ve || ye) && (n = requestAnimationFrame(function () {
        ve && !ye && (Fe(e, t), xe({
          draggableInfo: e
        })), n = null;
      }), !0);
    };
  }

  function Xe(e, t) {
    return e.getOptions().autoScrollEnabled ? ee(t, e.getScrollMaxSpeed()) : function (e) {
      return null;
    };
  }

  function He(o) {
    pe.forEach(function (e) {
      var t = o ? e.getOptions().onDragStart : e.getOptions().onDragEnd;

      if (t) {
        var n = {
          isSource: e === me.container,
          payload: me.payload
        };
        e.isDragRelevant(me.container, me.payload) ? n.willAcceptDrop = !0 : n.willAcceptDrop = !1, t(n);
      }
    });
  }

  function Ye(e, t) {
    if (null !== fe) {
      ve = !0;
      var n = pe.filter(function (e) {
        return fe.parentElement === e.element;
      })[0];
      n.setDraggables(), Ee = n.getOptions().lockAxis ? n.getOptions().lockAxis.toLowerCase() : null, y = fe, b = pe.filter(function (e) {
        return y.parentElement === e.element;
      })[0], w = b.draggables.indexOf(y), x = b.getOptions().getGhostParent, E = y.getBoundingClientRect(), me = {
        container: b,
        element: y,
        size: {
          offsetHeight: E.bottom - E.top,
          offsetWidth: E.right - E.left
        },
        elementIndex: w,
        payload: b.getOptions().getChildPayload ? b.getOptions().getChildPayload(w) : void 0,
        targetElement: null,
        position: {
          x: 0,
          y: 0
        },
        groupName: b.getOptions().groupName,
        ghostParent: x ? x() : null,
        invalidateShadow: null,
        mousePosition: null,
        relevantContainers: null
      }, o = fe, r = {
        x: e.clientX,
        y: e.clientY
      }, i = me.container, a = t, l = r.x, s = r.y, c = o.getBoundingClientRect(), u = c.left, d = c.top, f = c.right, g = c.bottom, m = O(i.layout.getContainerRectangles().visibleRect, c), p = m.left + (m.right - m.left) / 2, v = m.top + (m.bottom - m.top) / 2, (h = o.cloneNode(!0)).style.zIndex = "1000", h.style.boxSizing = "border-box", h.style.position = "fixed", h.style.top = "0px", h.style.left = "0px", h.style.transform = null, h.style.removeProperty("transform"), i.shouldUseTransformForGhost() ? h.style.transform = "translate3d(".concat(u, "px, ").concat(d, "px, 0)") : (h.style.top = "".concat(d, "px"), h.style.left = "".concat(u, "px")), h.style.width = f - u + "px", h.style.height = g - d + "px", h.style.overflow = "visible", h.style.transition = null, h.style.removeProperty("transition"), h.style.pointerEvents = "none", h.style.userSelect = "none", i.getOptions().dragClass ? setTimeout(function () {
        M(h.firstElementChild, i.getOptions().dragClass);
        var e = window.getComputedStyle(h.firstElementChild).cursor;
        Ce = ie(e);
      }) : Ce = ie(a), M(h, i.getOptions().orientation || "vertical"), M(h, C), ge = {
        ghost: h,
        centerDelta: {
          x: p - l,
          y: v - s
        },
        positionDelta: {
          left: u - l,
          top: d - s
        },
        topLeft: {
          x: u,
          y: d
        }
      }, me.position = {
        x: e.clientX + ge.centerDelta.x,
        y: e.clientY + ge.centerDelta.y
      }, me.mousePosition = {
        x: e.clientX,
        y: e.clientY
      }, de = pe.filter(function (e) {
        return e.isDragRelevant(n, me.payload);
      }), me.relevantContainers = de, we = Ve(de), xe && xe({
        reset: !0,
        draggableInfo: void 0
      }), xe = Xe(n, de), de.forEach(function (e) {
        return e.prepareDrag(e, de);
      }), He(!0), we(me), Re().appendChild(ge.ghost), De.start();
    }

    var o, r, i, a, l, s, c, u, d, f, g, m, p, v, h, y, b, w, x, E;
  }

  var ke = null;

  function Ge() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        o = ge,
        r = o.ghost,
        i = o.topLeft,
        a = i.x,
        l = i.y,
        s = !me.container || me.container.shouldUseTransformForGhost(),
        c = s ? "translate3d(".concat(a, "px,").concat(l, "px, 0)") : null;
    if (1 !== t && (c = c ? "".concat(c, " scale(").concat(t, ")") : "scale(".concat(t, ")")), 0 < e) return ge.ghost.style.transitionDuration = e + "ms", void requestAnimationFrame(function () {
      c && (r.style.transform = c), s || (r.style.left = a + "px", r.style.top = l + "px"), ke = null, n && (r.style.opacity = "0");
    });
    null === ke && (ke = requestAnimationFrame(function () {
      c && (r.style.transform = c), s || (r.style.left = a + "px", r.style.top = l + "px"), ke = null, n && (r.style.opacity = "0");
    }));
  }

  function We() {
    if (ve && !he && !ye) {
      be = !(he = !0);
      var t = Object.assign({}, me, {
        targetElement: null,
        position: {
          x: Number.MAX_SAFE_INTEGER,
          y: Number.MAX_SAFE_INTEGER
        },
        mousePosition: {
          x: Number.MAX_SAFE_INTEGER,
          y: Number.MAX_SAFE_INTEGER
        }
      });
      de.forEach(function (e) {
        e.handleDrag(t);
      }), me.targetElement = null, me.cancelDrop = !0, je(), he = !1;
    }
  }

  "undefined" != typeof window && function () {
    if ("undefined" != typeof window) {
      var e = window.document.head || window.document.getElementsByTagName("head")[0],
          t = window.document.createElement("style");
      t.id = "smooth-dnd-style-definitions";
      var n = re(oe);
      t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = n : t.appendChild(window.document.createTextNode(n)), e.appendChild(t);
    }
  }();
  var qe = (Oe(), {
    register: function (e) {
      var t;
      t = e, pe.push(t), ve && me && t.isDragRelevant(me.container, me.payload) && (de.push(t), t.prepareDrag(t, de), xe && xe({
        reset: !0,
        draggableInfo: void 0
      }), xe = Xe(t, de), we = Ve(de), t.handleDrag(me));
    },
    unregister: function (e) {
      !function (e) {
        if (pe.splice(pe.indexOf(e), 1), ve && me) {
          me.container === e && e.fireRemoveElement(), me.targetElement === e.element && (me.targetElement = null);
          var t = de.indexOf(e);
          -1 < t && (de.splice(t, 1), xe && xe({
            reset: !0,
            draggableInfo: void 0
          }), xe = Xe(e, de), we = Ve(de));
        }
      }(e);
    },
    isDragging: function () {
      return ve;
    },
    cancelDrag: We
  });

  function Ue(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : S.animationDuration;
    t ? (M(e, o), e.style.transitionDuration = n + "ms") : (j(e, o), e.style.removeProperty("transition-duration"));
  }

  function Je(n) {
    var o = [];
    return Array.prototype.forEach.call(n.children, function (e) {
      if (e.nodeType === Node.ELEMENT_NODE) {
        var t = e;
        L(e, b) || (t = function (e) {
          if (yt.wrapChild) {
            var t = window.document.createElement("div");
            return t.className = "".concat(b), e.parentElement.insertBefore(t, e), t.appendChild(e), t;
          }

          return e;
        }(e)), t[p] = 0, o.push(t);
      } else n.removeChild(e);
    }), o;
  }

  function Ke(e) {
    var g = e.layout;
    return function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
      return function e(t, n, o, r) {
        var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
        if (r < o) return o;

        if (o === r) {
          var a = g.getBeginEnd(t[o]),
              l = a.begin,
              s = a.end;
          return i ? n < (s + l) / 2 ? o : o + 1 : o;
        }

        var c = Math.floor((r + o) / 2),
            u = g.getBeginEnd(t[c]),
            d = u.begin,
            f = u.end;
        return n < d ? e(t, n, o, c - 1, i) : f < n ? e(t, n, c + 1, r, i) : i ? n < (f + d) / 2 ? c : c + 1 : c;
      }(e, t, 0, e.length - 1, n);
    };
  }

  function Qe(e) {
    var t,
        n,
        o,
        r,
        i = e.element,
        a = e.draggables,
        l = e.layout,
        s = e.getOptions,
        c = (n = (t = {
      element: i,
      draggables: a,
      layout: l,
      getOptions: s
    }).element, o = t.draggables, r = t.layout, function () {
      o.forEach(function (e) {
        Ue(e, !1), r.setTranslation(e, 0), r.setVisibility(e, !0);
      }), n[h] && (n[h].parentNode.removeChild(n[h]), n[h] = null);
    }),
        u = (yt.dropHandler || Y)({
      element: i,
      draggables: a,
      layout: l,
      getOptions: s
    });
    return function (e, t) {
      var n = t.addedIndex,
          o = t.removedIndex,
          r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];

      if (c(), !e.cancelDrop && (e.targetElement || s().removeOnDropOut || r)) {
        var i = {
          removedIndex: o,
          addedIndex: null !== n ? null !== o && o < n ? n - 1 : n : null,
          payload: e.payload
        };
        u(i, s().onDrop);
      }
    };
  }

  function Ze(e) {
    var o = e.element,
        r = e.getOptions,
        i = null;
    return function (e) {
      var t = e.draggableInfo,
          n = i;
      return null == i && t.container.element === o && "copy" !== r().behaviour && (n = i = t.elementIndex), {
        removedIndex: n
      };
    };
  }

  function $e(e) {
    var n = e.draggables,
        o = e.layout;
    return function (e) {
      var t = e.dragResult;
      null !== t.removedIndex && o.setVisibility(n[t.removedIndex], !1);
    };
  }

  function et(e) {
    var r = e.element,
        i = e.layout;
    return function (e) {
      var t = e.draggableInfo,
          n = document.elementFromPoint(t.position.x, t.position.y);

      if (n) {
        var o = z(n, t.relevantContainers);
        if (o && o.element === r) return {
          pos: i.getPosition(t.position)
        };
      }

      return {
        pos: null
      };
    };
  }

  function tt(e) {
    var n = e.layout,
        o = null;
    return function (e) {
      var t = e.draggableInfo;
      return null === e.dragResult.pos ? o = null : {
        elementSize: o = o || n.getSize(t.size)
      };
    };
  }

  function nt(e) {
    var o = e.element;
    return function (e) {
      var t = e.draggableInfo,
          n = e.dragResult;
      !function (e, t) {
        var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
        t && n ? e.targetElement = t : e.targetElement === t && (e.targetElement = null);
      }(t, o, !!n.pos);
    };
  }

  function ot() {
    return function (e) {
      return null !== e.dragResult.pos ? {
        addedIndex: 0
      } : {
        addedIndex: null
      };
    };
  }

  function rt(e) {
    var r = e.layout,
        i = null;
    return function (e) {
      var t = e.dragResult.addedIndex;
      if (t === i) return null;
      i = t;
      var n = r.getBeginEndOfContainer(),
          o = n.begin;
      n.end;
      return {
        shadowBeginEnd: {
          rect: r.getTopLeftOfElementBegin(o)
        }
      };
    };
  }

  function it(e) {
    var g = e.layout,
        m = e.element,
        p = e.getOptions,
        v = null;
    return function (e) {
      var t = e.dragResult,
          n = t.elementSize,
          o = t.shadowBeginEnd,
          r = t.addedIndex,
          i = t.dropPlaceholderContainer,
          a = p();

      if (a.dropPlaceholder) {
        var l = "boolean" == typeof a.dropPlaceholder ? {} : a.dropPlaceholder,
            s = l.animationDuration,
            c = l.className,
            u = l.showOnTop;
        if (null === r) return i && null !== v && m.removeChild(i), v = null, {
          dropPlaceholderContainer: void 0
        };

        if (!i) {
          var d = document.createElement("div"),
              f = document.createElement("div");
          f.className = D, d.className = "".concat(x, " ").concat(c || y), (i = document.createElement("div")).className = "".concat(E), i.style.position = "absolute", void 0 !== s && (i.style.transition = "all ".concat(s, "ms ease")), i.appendChild(f), f.appendChild(d), g.setSize(i.style, n + "px"), i.style.pointerEvents = "none", u ? m.appendChild(i) : m.insertBefore(i, m.firstElementChild);
        }

        return v !== r && o.dropArea && g.setBegin(i.style, o.dropArea.begin - g.getBeginEndOfContainer().begin + "px"), v = r, {
          dropPlaceholderContainer: i
        };
      }

      return null;
    };
  }

  function at(e) {
    var o = dt(e);
    return function (e) {
      var t = e.draggableInfo,
          n = e.dragResult;
      return t.invalidateShadow ? o({
        draggableInfo: t,
        dragResult: n
      }) : null;
    };
  }

  function lt(e) {
    var t,
        i,
        a,
        o = (i = (t = e).draggables, a = Ke({
      layout: t.layout
    }), function (e) {
      var t = e.dragResult,
          n = t.shadowBeginEnd,
          o = t.pos;
      if (n) return n.begin + n.beginAdjustment <= o && n.end >= o ? null : o < n.begin + n.beginAdjustment ? a(i, o) : o > n.end ? a(i, o) + 1 : i.length;
      var r = a(i, o, !0);
      return null !== r ? r : i.length;
    });
    return function (e) {
      var t = e.dragResult,
          n = null;
      return null !== t.pos && null === (n = o({
        dragResult: t
      })) && (n = t.addedIndex), {
        addedIndex: n
      };
    };
  }

  function st() {
    var r = null;
    return function (e) {
      var t = e.dragResult,
          n = t.addedIndex,
          o = t.shadowBeginEnd;
      n !== r && null !== r && o && (o.beginAdjustment = 0), r = n;
    };
  }

  function ct(e) {
    var u = e.element,
        d = e.draggables,
        f = e.layout,
        g = e.getOptions,
        m = null;
    return function (e) {
      var t = e.dragResult,
          n = t.addedIndex,
          o = t.removedIndex,
          r = t.elementSize;
      if (null === o) if (null !== n) {
        if (!m) {
          var i = f.getBeginEndOfContainer();
          i.end = i.begin + f.getSize(u);
          var a = f.getScrollSize(u) > f.getSize(u) ? i.begin + f.getScrollSize(u) - f.getScrollValue(u) : i.end,
              l = 0 < d.length ? f.getBeginEnd(d[d.length - 1]).end - d[d.length - 1][p] : i.begin;

          if (a < l + r) {
            (m = window.document.createElement("div")).className = v + " " + g().orientation;
            var s = 0 < d.length ? r + l - a : r;
            return f.setSize(m.style, "".concat(s, "px")), u.appendChild(m), u[h] = m, {
              containerBoxChanged: !0
            };
          }
        }
      } else if (m) {
        f.setTranslation(m, 0);
        var c = m;
        return m = null, u.removeChild(c), {
          containerBoxChanged: !(u[h] = null)
        };
      }
    };
  }

  function ut(e) {
    var s = e.draggables,
        c = e.layout,
        u = null,
        d = null;
    return function (e) {
      var t = e.dragResult,
          n = t.addedIndex,
          o = t.removedIndex,
          r = t.elementSize;

      if (n !== u || o !== d) {
        for (var i = 0; i < s.length; i++) if (i !== o) {
          var a = s[i],
              l = 0;
          null !== o && o < i && (l -= r), null !== n && n <= i && (l += r), c.setTranslation(a, l);
        }

        return {
          addedIndex: u = n,
          removedIndex: d = o
        };
      }
    };
  }

  function dt(e) {
    var x = e.draggables,
        E = e.layout,
        C = null;
    return function (e) {
      var t = e.draggableInfo,
          n = e.dragResult,
          o = n.addedIndex,
          r = n.removedIndex,
          i = n.elementSize,
          a = n.pos,
          l = n.shadowBeginEnd;
      if (null === a) return {
        shadowBeginEnd: C = null
      };
      if (null === o || !t.invalidateShadow && o === C) return null;
      var s = o - 1,
          c = Number.MIN_SAFE_INTEGER,
          u = 0,
          d = 0,
          f = null,
          g = null;

      if (s === r && s--, -1 < s) {
        var m = E.getSize(x[s]);

        if (g = E.getBeginEnd(x[s]), i < m) {
          var p = (m - i) / 2;
          c = g.end - p;
        } else c = g.end;

        u = g.end;
      } else g = {
        end: E.getBeginEndOfContainer().begin
      }, u = E.getBeginEndOfContainer().begin;

      var v = Number.MAX_SAFE_INTEGER,
          h = o;

      if (h === r && h++, h < x.length) {
        var y = E.getSize(x[h]);

        if (f = E.getBeginEnd(x[h]), i < y) {
          var b = (y - i) / 2;
          v = f.begin + b;
        } else v = f.begin;

        d = f.begin;
      } else f = {
        begin: E.getContainerRectangles().rect.end
      }, d = E.getContainerRectangles().rect.end - E.getContainerRectangles().rect.begin;

      var w = g && f ? E.getTopLeftOfElementBegin(g.end) : null;
      return C = o, {
        shadowBeginEnd: {
          dropArea: {
            begin: u,
            end: d
          },
          begin: c,
          end: v,
          rect: w,
          beginAdjustment: l ? l.beginAdjustment : 0
        }
      };
    };
  }

  function ft() {
    var a = null;
    return function (e) {
      var t = e.dragResult,
          n = t.pos,
          o = t.addedIndex,
          r = t.shadowBeginEnd;

      if (null !== n) {
        if (null != o && null === a) {
          if (n < r.begin) {
            var i = n - r.begin - 5;
            r.beginAdjustment = i;
          }

          a = o;
        }
      } else a = null;
    };
  }

  function gt(e) {
    var t = e.getOptions,
        n = !1,
        o = t();
    return function (e) {
      var t = !!e.dragResult.pos;
      t !== n && ((n = t) ? o.onDragEnter && o.onDragEnter() : o.onDragLeave && o.onDragLeave());
    };
  }

  function mt(e) {
    var t = e.getOptions,
        s = null,
        c = t();
    return function (e) {
      var t = e.dragResult,
          n = t.addedIndex,
          o = t.removedIndex,
          r = e.draggableInfo,
          i = r.payload,
          a = r.element;

      if (c.onDropReady && null !== n && s !== n) {
        var l = s = n;
        null !== o && o < n && l--, c.onDropReady({
          addedIndex: l,
          removedIndex: o,
          payload: i,
          element: a ? a.firstElementChild : void 0
        });
      }
    };
  }

  function pt(e) {
    return "drop-zone" === e.getOptions().behaviour ? vt(e)(Ze, $e, et, tt, nt, ot, rt, gt, mt) : vt(e)(Ze, $e, et, tt, nt, at, lt, st, ct, ut, dt, it, ft, gt, mt);
  }

  function vt(i) {
    return function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

      var o = t.map(function (e) {
        return e(i);
      }),
          r = null;
      return function (n) {
        return r = o.reduce(function (e, t) {
          return Object.assign(e, t({
            draggableInfo: n,
            dragResult: e
          }));
        }, r || {
          addedIndex: null,
          removedIndex: null,
          elementSize: null,
          pos: null,
          shadowBeginEnd: null
        });
      };
    };
  }

  function ht(y) {
    return function (e) {
      var t,
          n,
          o,
          r,
          i,
          a,
          l,
          s = Object.assign({}, S, e),
          c = null,
          u = null,
          d = (n = h, o = Je(t = y), r = n(), M(t, "".concat(w, " ").concat(r.orientation)), {
        element: t,
        draggables: o,
        getOptions: n,
        layout: q(t, r.orientation, r.animationDuration)
      }),
          f = pt(d),
          g = Qe(d),
          m = function (t, n) {
        var o = [];

        function e() {
          o && (o.forEach(function (e) {
            return e.removeEventListener("scroll", n);
          }), window.removeEventListener("scroll", n));
        }

        return function () {
          for (var e = t; e;) (I(e, "x") || I(e, "y")) && o.push(e), e = e.parentElement;
        }(), {
          dispose: function () {
            e(), o = null;
          },
          start: function () {
            o && (o.forEach(function (e) {
              return e.addEventListener("scroll", n);
            }), window.addEventListener("scroll", n));
          },
          stop: e
        };
      }(y, function () {
        d.layout.invalidateRects(), p();
      });

      function p() {
        null !== u && (u.invalidateShadow = !0, c = f(u), u.invalidateShadow = !1);
      }

      function v(e, t) {
        for (var n = Je(t), o = 0; o < n.length; o++) e[o] = n[o];

        for (var r = 0; r < e.length - n.length; r++) e.pop();
      }

      function h() {
        return s;
      }

      return {
        element: y,
        draggables: d.draggables,
        isDragRelevant: (i = d, a = i.element, l = i.getOptions, function (e, t) {
          var n = l();
          if (n.shouldAcceptDrop) return n.shouldAcceptDrop(e.getOptions(), t);
          var o = e.getOptions();
          return "copy" !== n.behaviour && N(a, "." + b) !== e.element && (e.element === a || !(!o.groupName || o.groupName !== n.groupName));
        }),
        layout: d.layout,
        dispose: function (e) {
          var t;
          m.dispose(), t = e.element, yt.wrapChild && Array.prototype.forEach.call(t.children, function (e) {
            e.nodeType === Node.ELEMENT_NODE && L(e, b) && (t.insertBefore(e.firstElementChild, e), t.removeChild(e));
          });
        },
        prepareDrag: function (e, t) {
          var n = e.element,
              o = d.draggables;
          v(o, n), e.layout.invalidateRects(), o.forEach(function (e) {
            return Ue(e, !0, h().animationDuration);
          }), m.start();
        },
        handleDrag: function (e) {
          return c = f(u = e);
        },
        handleDrop: function (e) {
          m.stop(), c && c.dropPlaceholderContainer && y.removeChild(c.dropPlaceholderContainer), u = null, f = pt(d), g(e, c), c = null;
        },
        fireRemoveElement: function () {
          g(u, Object.assign({}, c, {
            addedIndex: null
          }), !0), c = null;
        },
        getDragResult: function () {
          return c;
        },
        getTranslateCalculator: function (e) {
          return ut(d)(e);
        },
        onTranslated: function () {
          p();
        },
        setDraggables: function () {
          v(d.draggables, y);
        },
        getScrollMaxSpeed: function () {
          return yt.maxScrollSpeed;
        },
        shouldUseTransformForGhost: function () {
          return !0 === yt.useTransformForGhost;
        },
        getOptions: h,
        setOptions: function (e) {
          var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
          s = !1 === t ? Object.assign({}, S, e) : Object.assign({}, S, s, e);
        }
      };
    };
  }

  var yt = function (e, t) {
    var n = ht(e)(t);
    return e[r] = n, qe.register(n), {
      dispose: function () {
        qe.unregister(n), n.dispose(n);
      },
      setOptions: function (e, t) {
        n.setOptions(e, t);
      }
    };
  };

  function bt(e, t, n) {
    Object.defineProperty(e, n, {
      set: function (e) {
        t[n] = e;
      },
      get: function () {
        return t[n];
      }
    });
  }

  yt.wrapChild = !0, yt.cancelDrag = function () {
    qe.cancelDrag();
  }, yt.isDragging = function () {
    return qe.isDragging();
  };

  var wt = function (e, t) {
    return console.warn('default export is deprecated. please use named export "smoothDnD"'), yt(e, t);
  };

  wt.cancelDrag = function () {
    yt.cancelDrag();
  }, wt.isDragging = function () {
    return yt.isDragging();
  }, bt(wt, yt, "useTransformForGhost"), bt(wt, yt, "maxScrollSpeed"), bt(wt, yt, "wrapChild"), bt(wt, yt, "dropHandler"), e.smoothDnD = yt, e.constants = n, e.dropHandlers = k, e.default = wt, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ 3500:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-smooth-dnd/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "* {\n  font-family: \"Oxygen\", sans-serif;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.app {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.nav-button {\n  display: none;\n  position: fixed;\n  left: 10px;\n  top: 20px;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  transform: rotate(0deg);\n  transition: 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.nav-button.open {\n  left: 310px;\n}\n\n.nav-button.open span {\n  background: #ccc;\n}\n\n.nav-button span {\n  display: block;\n  position: absolute;\n  height: 4px;\n  width: 100%;\n  background: #fff;\n  border-radius: 4px;\n  opacity: 1;\n  left: 0;\n  transform: rotate(0deg);\n  transition: 0.25s ease-in-out;\n}\n\n/* Icon 3 */\n\n.nav-button span:nth-child(1) {\n  top: 0px;\n}\n\n.nav-button span:nth-child(2), .nav-button span:nth-child(3) {\n  top: 8px;\n}\n\n.nav-button span:nth-child(4) {\n  top: 16px;\n}\n\n.nav-button.open span:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n\n.nav-button.open span:nth-child(2) {\n  transform: rotate(45deg);\n}\n\n.nav-button.open span:nth-child(3) {\n  transform: rotate(-45deg);\n}\n\n.nav-button.open span:nth-child(4) {\n  top: 8px;\n  width: 0%;\n  left: 50%;\n}\n\n.navigator {\n  width: 350px;\n  flex-shrink: 0;\n  box-shadow: 0px 2px 5px #ccc;\n  background-color: white;\n  z-index: 1;\n  transition: width 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n.navigator.closed {\n  width: 0;\n}\n\n.navigator-content {\n  padding-top: 0px;\n  width: 350px;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.navigator-header h3 {\n  padding-left: 10px;\n}\n\n.divider {\n  height: 1px;\n  border-bottom: 1px solid #ddd;\n  margin-top: -2px;\n}\n\n.menu-section h4 {\n  color: #444;\n  padding-left: 10px;\n}\n\n.menu-section ul {\n  color: #666;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.menu-section li {\n  font-size: 14px;\n  margin: 0;\n  padding: 10px;\n  padding-left: 30px;\n  cursor: pointer;\n  margin-bottom: 5px;\n}\n\n.menu-section li:hover {\n  background-color: ghostwhite;\n}\n\n.menu-section li.selected {\n  background-color: ghostwhite;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  background-color: #f8f9fa;\n  min-width: 0;\n}\n\n.demo {\n  flex: 1;\n  overflow: auto;\n  min-width: 0;\n}\n\n.header {\n  height: 60px;\n  background-color: rgb(221, 0, 49);\n  box-shadow: 2px 0px 4px #ccc;\n  z-index: 0;\n  color: white;\n  font-size: 20px;\n  padding: 0 50px;\n  vertical-align: middle;\n  line-height: 60px;\n}\n\n.header.open {\n  padding: 0 20px;\n}\n\n@media (max-width: 700px) {\n  .navigator {\n    position: fixed;\n    height: 100%;\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n  .nav-button {\n    display: block;\n  }\n}\n\n.demo-panel {\n  flex: 1;\n  overflow-x: auto;\n  background-color: #f8f9fa;\n}\n\n.nav-panel {\n  flex-shrink: 0;\n  width: 300px;\n}\n\n.demo-navigator {\n  list-style: none;\n  box-sizing: border-box;\n  position: fixed;\n  width: 300px;\n  bottom: 0px;\n  top: 0px;\n  left: 0px;\n  padding: 0px;\n  margin: 0;\n  box-shadow: 1px 0px 5px #ccc;\n  z-index: 1;\n}\n\n.demo-navigator li {\n  height: 50px;\n  display: block;\n}\n\n.demo-header {\n  height: 50px;\n  background-color: #eee;\n}\n\n.source-code {\n  float: right;\n  height: 60px;\n  line-height: 60px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.source-code img {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n}\n\n.source-code span {\n  font-size: 14px;\n  color: #eee;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n.demo-navigator button {\n  border: 1px solid #348;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  display: block;\n  background-color: rgb(64, 105, 182);\n  cursor: pointer;\n  outline: 0;\n  color: white;\n  border-top: 1px solid rgb(116, 137, 223);\n  border-bottom: 1px solid rgb(43, 76, 185);\n  transition: all 0.2s ease;\n  font-size: 16px;\n}\n\n.demo-navigator button:hover {\n  background-color: rgb(47, 94, 182);\n}\n\n.simple-page {\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.simple-page-scroller {\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  overflow-y: auto;\n  height: 80vh;\n}\n\n.draggable-item {\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  width: 100%;\n  display: block;\n  background-color: #fff;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.draggable-item-horizontal {\n  height: 300px;\n  padding: 10px;\n  line-height: 100px;\n  text-align: center;\n  /* width : 200px; */\n  display: block;\n  background-color: #fff;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  margin-right: 4px;\n}\n\n.form-demo {\n  width: 650px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  display: flex;\n}\n\n.form {\n  flex: 3;\n  /* width: 500px; */\n  /* background-color: #f3f3f3; */\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 6px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.08);\n}\n\n.form-fields-panel {\n  flex: 1;\n  margin-right: 50px;\n}\n\n.form-field {\n  height: 50px;\n  width: 250px;\n  line-height: 30px;\n  vertical-align: middle;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #ddd;\n  /* background-color: #eee; */\n  cursor: move;\n}\n\n.form-line {\n  padding: 20px 30px;\n  background-color: #f8f9fa;\n  border: 1px solid transparent;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  transition-property: border-color, background-color;\n  cursor: move;\n}\n\n.form-line.selected {\n  /* border: 1px solid #ddd; */\n  background-color: #f8f9fa;\n  /* box-shadow: 0px 0px 10px 10px #ccc; */\n}\n\n.form-ghost {\n  transition: 0.18s ease;\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.08);\n}\n\n.form-ghost-drop {\n  box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0);\n}\n\n.form-submit-button {\n  border: 0;\n  width: 100%;\n  vertical-align: middle;\n  height: 40px;\n  color: #eee;\n  background-color: cornflowerblue;\n  cursor: pointer;\n}\n\n.label {\n  margin-bottom: 5px;\n}\n\n.field {\n  cursor: auto;\n}\n\n.field input, .field textarea, .field select {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  outline: none;\n  transition: border-color 0.3s ease;\n}\n\n.field input[type=radio], .field input[type=checkbox] {\n  width: auto;\n}\n\n.field input:focus, textarea:focus {\n  border: 1px solid #80bdff;\n  box-shadow: 0 0 3px 0px #80bdff;\n}\n\n.field-group input, .field-group textarea, .field-group select {\n  width: 49%;\n  margin-right: 2%;\n}\n\ninput:last-child {\n  margin-right: 0;\n}\n\n.dragging {\n  background-color: yellow;\n}\n\n.card-scene {\n  padding: 50px;\n  /* background-color: #fff; */\n}\n\n.card-container {\n  width: 320px;\n  padding: 10px;\n  margin: 5px;\n  margin-right: 45px;\n  background-color: #f3f3f3;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);\n}\n\n.card {\n  margin: 5px;\n  /* border: 1px solid #ccc; */\n  background-color: white;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n}\n\n.card-column-header {\n  font-size: 18px;\n}\n\n.column-drag-handle {\n  cursor: move;\n  padding: 5px;\n}\n\n.card-ghost {\n  transition: transform 0.18s ease;\n  transform: rotateZ(5deg);\n}\n\n.card-ghost-drop {\n  transition: transform 0.18s ease-in-out;\n  transform: rotateZ(0deg);\n}\n\n.opacity-ghost {\n  transition: all 0.18s ease;\n  opacity: 0.8;\n  cursor: ns-resize;\n  /* transform: rotateZ(5deg); */\n  background-color: cornflowerblue;\n  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);\n}\n\n.opacity-ghost-drop {\n  opacity: 1;\n  /* transform: rotateZ(0deg); */\n  background-color: white;\n  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFJQSx1QkFBQTtFQUlBLDRCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBSUEsdUJBQUE7RUFJQSw2QkFBQTtBQUVGOztBQUNBLFdBQUE7O0FBRUE7RUFDRSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUlFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFJRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtFQUNGO0VBRUE7SUFDRSxjQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQUZGOztBQUtBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSwrQ0FBQTtBQUhGOztBQU1BO0VBQ0Usd0NBQUE7QUFIRjs7QUFNQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0VBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0VBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsdUNBQUE7RUFDQSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0NBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUFIRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keXtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOjA7XG59XG5cbi5hcHB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdi1idXR0b257XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAyMHB4O1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1idXR0b24ub3BlbntcbiAgbGVmdDogMzEwcHg7XG59XG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW57XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5uYXYtYnV0dG9uIHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBJY29uIDMgKi9cblxuLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAwcHg7XG59XG5cbi5uYXYtYnV0dG9uICBzcGFuOm50aC1jaGlsZCgyKSwubmF2LWJ1dHRvbiAgc3BhbjpudGgtY2hpbGQoMykge1xuICB0b3A6IDhweDtcbn1cblxuLm5hdi1idXR0b24gIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiAxNnB4O1xufVxuXG4ubmF2LWJ1dHRvbi5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxOHB4O1xuICB3aWR0aDogMCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLm5hdi1idXR0b24ub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5uYXYtYnV0dG9uLm9wZW4gc3BhbjpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLm5hdi1idXR0b24ub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogMCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLm5hdmlnYXRvcntcbiAgd2lkdGg6IDM1MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmlnYXRvci5jbG9zZWR7XG4gIHdpZHRoOiAwO1xufVxuXG4ubmF2aWdhdG9yLWNvbnRlbnR7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubmF2aWdhdG9yLWhlYWRlciBoM3tcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2aWRlcntcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4ubWVudS1zZWN0aW9uIGg0e1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWVudS1zZWN0aW9uIHVse1xuICBjb2xvcjogIzY2NjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVudS1zZWN0aW9uIGxpe1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1lbnUtc2VjdGlvbiBsaTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuLm1lbnUtc2VjdGlvbiBsaS5zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuLmNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5kZW1vIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmhlYWRlcntcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAwLCA0OSk7XG4gIGJveC1zaGFkb3c6IDJweCAwcHggNHB4ICNjY2M7XG4gIHotaW5kZXg6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuXG4uaGVhZGVyLm9wZW57XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5uYXZpZ2F0b3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLm5hdi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5kZW1vLXBhbmVse1xuICBmbGV4OjE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5uYXYtcGFuZWx7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5kZW1vLW5hdmlnYXRvcntcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMXB4IDBweCA1cHggI2NjYztcbiAgei1pbmRleDogMTtcbn1cblxuLmRlbW8tbmF2aWdhdG9yIGxpe1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGVtby1oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5zb3VyY2UtY29kZXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zb3VyY2UtY29kZSBpbWd7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zb3VyY2UtY29kZSBzcGFue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRlbW8tbmF2aWdhdG9yIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aCA6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDEwNSwgMTgyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTE2LCAxMzcsIDIyMyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNDMsIDc2LCAxODUpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRlbW8tbmF2aWdhdG9yIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgOTQsIDE4Mik7XG59XG5cblxuLnNpbXBsZS1wYWdle1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2ltcGxlLXBhZ2Utc2Nyb2xsZXJ7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogODB2aDtcbn1cblxuLmRyYWdnYWJsZS1pdGVte1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoIDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZHJhZ2dhYmxlLWl0ZW0taG9yaXpvbnRhbHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIHdpZHRoIDogMjAwcHg7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmZvcm0tZGVtb3tcbiAgd2lkdGg6IDY1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4XG59XG5cbi5mb3Jte1xuICBmbGV4OiAzO1xuICAvKiB3aWR0aDogNTAwcHg7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjA4KSwgMHB4IDNweCAzcHggcmdiYSgwLDAsMCwwLjA4KTtcbn1cblxuLmZvcm0tZmllbGRzLXBhbmVse1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5mb3JtLWZpZWxke1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VlZTsgKi9cbiAgY3Vyc29yOiBtb3ZlO1xuXG59XG5cbi5mb3JtLWxpbmUge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5mb3JtLWxpbmUuc2VsZWN0ZWQge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCAjY2NjOyAqL1xufVxuXG4uZm9ybS1naG9zdHtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4wOCk7XG59XG5cbi5mb3JtLWdob3N0LWRyb3B7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wKTtcbn1cblxuLmZvcm0tc3VibWl0LWJ1dHRvbntcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmllbGQge1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5maWVsZCBpbnB1dCwgLmZpZWxkIHRleHRhcmVhLCAuZmllbGQgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcyBlYXNlO1xufVxuXG4uZmllbGQgaW5wdXRbdHlwZT1cInJhZGlvXCJdLCAuZmllbGQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5maWVsZCBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjODBiZGZmO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDBweCAjODBiZGZmO1xufVxuXG4uZmllbGQtZ3JvdXAgaW5wdXQsIC5maWVsZC1ncm91cCB0ZXh0YXJlYSwgLmZpZWxkLWdyb3VwIHNlbGVjdCB7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbmlucHV0Omxhc3QtY2hpbGR7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmRyYWdnaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uY2FyZC1zY2VuZXtcbiAgcGFkZGluZzogNTBweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbn1cblxuLmNhcmQtY29udGFpbmVye1xuICB3aWR0aDogMzIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjI0KTtcbn1cblxuLmNhcmR7XG4gIG1hcmdpbjogNXB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMjQpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC1jb2x1bW4taGVhZGVye1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb2x1bW4tZHJhZy1oYW5kbGV7XG4gIGN1cnNvcjogbW92ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY2FyZC1naG9zdCB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE4cyBlYXNlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZylcbn1cblxuLmNhcmQtZ2hvc3QtZHJvcHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMThzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZylcbn1cblxuLm9wYWNpdHktZ2hvc3Qge1xuICB0cmFuc2l0aW9uOiBhbGwgLjE4cyBlYXNlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogbnMtcmVzaXplO1xuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZyk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLm9wYWNpdHktZ2hvc3QtZHJvcCB7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAzcHggcmdiYSgwLDAsMCwwLjApO1xufVxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div class=\"card-scene\">\n      <smooth-dnd-container\n        [orientation]=\"'horizontal'\"\n        (drop)=\"onColumnDrop($event)\"\n        [dragHandleSelector]=\"'.column-drag-handle'\"\n      >\n        <smooth-dnd-draggable *ngFor=\"let column of scene.children\">\n          <div [ngClass]=\"column.props.className\">\n            <div class=\"card-column-header\">\n              <span class=\"column-drag-handle\">&#x2630;</span>\n              {{column.name}}\n            </div>\n            <smooth-dnd-container\n              [groupName]=\"'col'\"\n              (drop)=\"onCardDrop(column.id, $event)\"\n              [getChildPayload]=\"getCardPayload(column.id)\"\n              [dragClass]=\"'card-ghost'\"\n              [dropClass]=\"'card-ghost-drop'\"\n              (dragStart)=\"log('drag start', $event)\"\n              (dragEnd)=\"log('drag end', $event)\"\n            >\n              <smooth-dnd-draggable *ngFor=\"let card of column.children\">\n                <div [ngClass]=\"card.props.className\" [ngStyle]=\"card.props.style\">\n                  <p>\n                    {{card.data}}\n                  </p>\n                </div>\n              </smooth-dnd-draggable>\n            </smooth-dnd-container>\n          </div>\n        </smooth-dnd-draggable>\n      </smooth-dnd-container>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map