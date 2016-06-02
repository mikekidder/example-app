webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(316);
	var common_1 = __webpack_require__(70);
	var router_1 = __webpack_require__(245);
	var store_1 = __webpack_require__(69);
	var db_1 = __webpack_require__(335);
	var router_store_1 = __webpack_require__(340);
	var effects_1 = __webpack_require__(337);
	var app_1 = __webpack_require__(490);
	var routes_1 = __webpack_require__(499);
	var db_schema_1 = __webpack_require__(491);
	var reducers_1 = __webpack_require__(244);
	var effects_2 = __webpack_require__(493);
	var services_1 = __webpack_require__(500);
	var actions_1 = __webpack_require__(246);
	platform_browser_dynamic_1.bootstrap(app_1.default, [
	    /**
	     * provideStore is run once at application bootstrap, accepting a reducer
	     * function or object map of reducer functions. If passed an object of
	     * reducers, combineReducers will be run creating your application
	     * meta-reducer. This returns all providers for an @ngrx/store
	     * based application.
	     *
	     * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
	     */
	    store_1.provideStore(reducers_1.default),
	    /**
	     * runEffects configures all providers for @ngrx/effects. Observables decorated
	     * as an @Effect() within the supplied services will ultimately be merged,
	     * with output of relevant (registered as effects) actions being
	     * dispatched into your application store. Any side-effects in
	     * your application should be registered as effects.
	     *
	     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
	     */
	    effects_1.runEffects(effects_2.default),
	    /**
	     * provideRouter sets up all of the providers for @ngrx/router. It accepts
	     * an array of routes and a location strategy. By default, it will use
	     * `PathLocationStrategy`.
	     *
	     * Source: https://github.com/ngrx/router/blob/master/lib/index.ts#L44-L51
	     */
	    router_1.provideRouter(routes_1.default, common_1.HashLocationStrategy),
	    /**
	     * connectRouterToStore configures additional providers that synchronize
	     * router state with @ngrx/store. This lets you debug router state using
	     * ngrx/store and to change the location by dispatching actions.
	     */
	    router_store_1.connectRouterToStore(),
	    /**
	     * provideDB sets up @ngrx/db with the provided schema and makes the Database
	     * service everywhere.
	     */
	    db_1.provideDB(db_schema_1.default),
	    /**
	     * Finall we provide additional services and action creators so they can
	     * be used by all of our components, effects, and guards.
	     */
	    services_1.default,
	    actions_1.default
	]);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var map_1 = __webpack_require__(237);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(345));
	__export(__webpack_require__(489));
	__export(__webpack_require__(346));
	__export(__webpack_require__(347));
	__export(__webpack_require__(348));
	__export(__webpack_require__(349));


/***/ },
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var common_1 = __webpack_require__(70);
	var platform_browser_1 = __webpack_require__(320);
	var core_1 = __webpack_require__(1);
	var query_string_1 = __webpack_require__(379);
	var SyncSubject_1 = __webpack_require__(96);
	var Router = (function (_super) {
	    __extends(Router, _super);
	    function Router(platformStrategy) {
	        var _this = this;
	        _super.call(this, { path: _path(platformStrategy), type: 'push' });
	        this.platformStrategy = platformStrategy;
	        platformStrategy.onPopState(function (event) { return _this._update('pop'); });
	        this._baseHref = _getBaseHref(platformStrategy);
	    }
	    Router.prototype._update = function (type) {
	        this.next({ path: this.path(), type: type });
	    };
	    /**
	     * Returns the normalized URL path.
	     */
	    Router.prototype.path = function () {
	        return _path(this.platformStrategy);
	    };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Router.prototype.normalize = function (url) {
	        return _normalize(this._baseHref, url);
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Router.prototype.prepareExternalUrl = function (url, query) {
	        if (query === void 0) { query = ''; }
	        if (url.length > 0 && !url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(url + _normalizeQueryParams(_normalizeQuery(query)));
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Router.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, _normalizeQuery(query));
	        this._update('push');
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and replaces
	     * the top item on the platform's history stack.
	     */
	    Router.prototype.replace = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.replaceState(null, '', path, _normalizeQuery(query));
	        this._update('replace');
	    };
	    /**
	     * Changes the browsers query parameters. Replaces the top item on the platform's
	     * history stack
	     */
	    Router.prototype.search = function (query) {
	        if (query === void 0) { query = ''; }
	        var pathname = this.path().split('?')[0];
	        this.replace(pathname, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Router.prototype.forward = function () {
	        this.platformStrategy.forward();
	    };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Router.prototype.back = function () {
	        this.platformStrategy.back();
	    };
	    Router = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [common_1.LocationStrategy])
	    ], Router);
	    return Router;
	}(SyncSubject_1.SyncSubject));
	exports.Router = Router;
	function _path(location) {
	    return _normalize(_getBaseHref(location), location.path());
	}
	function _normalize(baseHref, url) {
	    return _stripTrailingSlash(_stripBaseHref(baseHref, _stripIndexHtml(url)));
	}
	function _getBaseHref(platformStrategy) {
	    var browserBaseHref = platformStrategy.getBaseHref();
	    return _stripTrailingSlash(_stripIndexHtml(browserBaseHref));
	}
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function _stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function _stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}
	function _normalizeQuery(query) {
	    return typeof query === 'string' ? query : query_string_1.stringify(query);
	}
	function _normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) !== '?') ? ('?' + params) : params;
	}
	exports.ROUTER_PROVIDERS = [
	    core_1.provide(Router, { useClass: Router }),
	    core_1.provide(common_1.PlatformLocation, { useClass: platform_browser_1.BrowserPlatformLocation })
	];
	//# sourceMappingURL=router.js.map

/***/ },
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var filter_1 = __webpack_require__(387);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(40);
	var isArray_1 = __webpack_require__(148);
	var isPromise_1 = __webpack_require__(394);
	var Observable_1 = __webpack_require__(3);
	var iterator_1 = __webpack_require__(240);
	var observable_1 = __webpack_require__(241);
	var InnerSubscriber_1 = __webpack_require__(658);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[observable_1.$$observable] === 'function') {
	        var obs = result[observable_1.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/**
	 * Instead of passing around action string constants and manually recreating
	 * action objects at the point of dispatch, we create services encapsulating
	 * each appropriate action group. Action types are included as static
	 * members and kept next to their action creator. This promotes a
	 * uniform interface and single import for appropriate actions
	 * within your application components.
	 */
	var BookActions = (function () {
	    function BookActions() {
	    }
	    BookActions.prototype.search = function (query) {
	        return {
	            type: BookActions.SEARCH,
	            payload: query
	        };
	    };
	    BookActions.prototype.searchComplete = function (results) {
	        return {
	            type: BookActions.SEARCH_COMPLETE,
	            payload: results
	        };
	    };
	    BookActions.prototype.addToCollection = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION,
	            payload: book
	        };
	    };
	    BookActions.prototype.addToCollectionSuccess = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION_SUCCESS,
	            payload: book
	        };
	    };
	    BookActions.prototype.addToCollectionFail = function (book) {
	        return {
	            type: BookActions.ADD_TO_COLLECTION_FAIL,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollection = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollectionSuccess = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION_SUCCESS,
	            payload: book
	        };
	    };
	    BookActions.prototype.removeFromCollectionFail = function (book) {
	        return {
	            type: BookActions.REMOVE_FROM_COLLECTION_FAIL,
	            payload: book
	        };
	    };
	    BookActions.prototype.loadCollection = function () {
	        return {
	            type: BookActions.LOAD_COLLECTION
	        };
	    };
	    BookActions.prototype.loadCollectionSuccess = function (books) {
	        return {
	            type: BookActions.LOAD_COLLECTION_SUCCESS,
	            payload: books
	        };
	    };
	    BookActions.prototype.loadBook = function (book) {
	        return {
	            type: BookActions.LOAD_BOOK,
	            payload: book
	        };
	    };
	    BookActions.SEARCH = '[Book] Search';
	    BookActions.SEARCH_COMPLETE = '[Book] Search Complete';
	    BookActions.ADD_TO_COLLECTION = '[Book] Add to Collection';
	    BookActions.ADD_TO_COLLECTION_SUCCESS = '[Book] Add to Collection Success';
	    BookActions.ADD_TO_COLLECTION_FAIL = '[Book] Add to Collection Fail';
	    BookActions.REMOVE_FROM_COLLECTION = '[Book] Remove from Collection';
	    BookActions.REMOVE_FROM_COLLECTION_SUCCESS = '[Book] Remove From Collection Success';
	    BookActions.REMOVE_FROM_COLLECTION_FAIL = '[Book] Remove From Collection Fail';
	    BookActions.LOAD_COLLECTION = '[Book] Load Collection';
	    BookActions.LOAD_COLLECTION_SUCCESS = '[Book] Load Collection Success';
	    BookActions.LOAD_BOOK = '[Book] Load Book';
	    BookActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BookActions);
	    return BookActions;
	}());
	exports.BookActions = BookActions;


/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(36);
	var SyncSubject = (function (_super) {
	    __extends(SyncSubject, _super);
	    function SyncSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    SyncSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    SyncSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    SyncSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return SyncSubject;
	}(Subject_1.Subject));
	exports.SyncSubject = SyncSubject;
	//# sourceMappingURL=SyncSubject.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * RouteSet is a projection of the current location. It maps location changes
	 * into parsed route params and a list of components to render
	 */
	__webpack_require__(106);
	__webpack_require__(87);
	__webpack_require__(669);
	__webpack_require__(104);
	__webpack_require__(247);
	__webpack_require__(383);
	__webpack_require__(480);
	var Observable_1 = __webpack_require__(3);
	var asap_1 = __webpack_require__(704);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(78);
	var route_traverser_1 = __webpack_require__(132);
	var hooks_1 = __webpack_require__(209);
	exports.ROUTER_HOOKS = new core_1.OpaqueToken('@ngrx/router Router Hooks');
	exports.INSTRUCTION_HOOKS = new core_1.OpaqueToken('@ngrx/router Instruction Hooks');
	exports.LOCATION_CHANGES = new core_1.OpaqueToken('@ngrx/router Location Changes');
	var RouterInstruction = (function (_super) {
	    __extends(RouterInstruction, _super);
	    function RouterInstruction() {
	        _super.apply(this, arguments);
	    }
	    return RouterInstruction;
	}(Observable_1.Observable));
	exports.RouterInstruction = RouterInstruction;
	var RouterInstructionFactory = (function () {
	    function RouterInstructionFactory(_locationChanges$, _traverser, _ngZone, _routerHooks, _instructionHooks) {
	        if (_routerHooks === void 0) { _routerHooks = []; }
	        if (_instructionHooks === void 0) { _instructionHooks = []; }
	        this._locationChanges$ = _locationChanges$;
	        this._traverser = _traverser;
	        this._ngZone = _ngZone;
	        this._routerHooks = _routerHooks;
	        this._instructionHooks = _instructionHooks;
	    }
	    RouterInstructionFactory.prototype.create = function () {
	        var _this = this;
	        return this._locationChanges$
	            .observeOn(asap_1.asap)
	            .distinctUntilChanged(function (prev, next) { return prev.path === next.path; })
	            .let(hooks_1.composeHooks(this._routerHooks))
	            .switchMap(function (change) { return _this._traverser.find(change); })
	            .filter(function (match) { return !!match; })
	            .let(hooks_1.composeHooks(this._instructionHooks))
	            .enterZone(this._ngZone)
	            .publishReplay(1)
	            .refCount();
	    };
	    RouterInstructionFactory = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(exports.LOCATION_CHANGES)),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.ROUTER_HOOKS)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject(exports.INSTRUCTION_HOOKS)), 
	        __metadata('design:paramtypes', [Observable_1.Observable, route_traverser_1.RouteTraverser, core_1.NgZone, Array, Array])
	    ], RouterInstructionFactory);
	    return RouterInstructionFactory;
	}());
	exports.RouterInstructionFactory = RouterInstructionFactory;
	exports.ROUTER_INSTRUCTION_PROVIDERS = [
	    new core_1.Provider(RouterInstruction, {
	        deps: [RouterInstructionFactory],
	        useFactory: function (rif) {
	            return rif.create();
	        }
	    }),
	    new core_1.Provider(RouterInstructionFactory, { useClass: RouterInstructionFactory }),
	    new core_1.Provider(exports.LOCATION_CHANGES, { useExisting: router_1.Router })
	];
	//# sourceMappingURL=router-instruction.js.map

/***/ },
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var of_1 = __webpack_require__(681);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mergeMap_1 = __webpack_require__(389);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var let_1 = __webpack_require__(689);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var select_1 = __webpack_require__(334);
	Observable_1.Observable.prototype.select = select_1.select;
	//# sourceMappingURL=select.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMap_1 = __webpack_require__(696);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	* This is a fork of react-router's MatchRoute. Instead of async callbacks, it
	* uses observables to perform async traversal of a route trie. It is expanded
	* to run route guards as part of the traversal process
	*/
	__webpack_require__(102);
	__webpack_require__(381);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(235);
	__webpack_require__(33);
	__webpack_require__(664);
	__webpack_require__(248);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var queryString = __webpack_require__(379);
	var resource_loader_1 = __webpack_require__(211);
	var match_pattern_1 = __webpack_require__(342);
	var route_1 = __webpack_require__(212);
	var hooks_1 = __webpack_require__(209);
	exports.TRAVERSAL_HOOKS = new core_1.OpaqueToken('@ngrx/router Traversal Hooks');
	;
	var RouteTraverser = (function () {
	    function RouteTraverser(_loader, _routes, _hooks) {
	        if (_hooks === void 0) { _hooks = []; }
	        this._loader = _loader;
	        this._routes = _routes;
	        this._hooks = _hooks;
	    }
	    /**
	    * Asynchronously matches the given location to a set of routes. The state
	    * object will have the following properties:
	    *
	    * - routes       An array of routes that matched, in hierarchical order
	    * - params       An object of URL parameters
	    */
	    RouteTraverser.prototype.find = function (change) {
	        var _a = change.path.split('?'), pathname = _a[0], query = _a[1];
	        var queryParams = queryString.parse(query);
	        return this._matchRoutes(queryParams, change, pathname);
	    };
	    RouteTraverser.prototype._matchRoutes = function (queryParams, locationChange, pathname, remainingPathname, routes, routeParamNames, routeParamValues) {
	        var _this = this;
	        if (remainingPathname === void 0) { remainingPathname = pathname; }
	        if (routes === void 0) { routes = this._routes; }
	        if (routeParamNames === void 0) { routeParamNames = []; }
	        if (routeParamValues === void 0) { routeParamValues = []; }
	        return Observable_1.Observable.from(routes)
	            .concatMap(function (route) { return _this._matchRouteDeep(route, queryParams, locationChange, pathname, remainingPathname, routeParamNames, routeParamValues); })
	            .catch(function (error) {
	            console.error('Error During Traversal', error);
	            return Observable_1.Observable.of(null);
	        })
	            .filter(function (match) { return !!match; })
	            .take(1);
	    };
	    RouteTraverser.prototype._matchRouteDeep = function (route, queryParams, locationChange, pathname, remainingPathname, paramNames, paramValues) {
	        var _this = this;
	        var pattern = route.path || '';
	        return Observable_1.Observable.of(route)
	            .filter(function () { return remainingPathname !== null; })
	            .do(function () {
	            var matched = match_pattern_1.matchPattern(pattern, remainingPathname);
	            remainingPathname = matched.remainingPathname;
	            paramNames = paramNames.concat(matched.paramNames);
	            paramValues = paramValues.concat(matched.paramValues);
	        })
	            .filter(function () { return remainingPathname !== null; })
	            .map(function () {
	            return {
	                route: route,
	                queryParams: queryParams,
	                locationChange: locationChange,
	                routeParams: match_pattern_1.makeParams(paramNames, paramValues),
	                isTerminal: remainingPathname === '' && !!route.path
	            };
	        })
	            .let(hooks_1.composeHooks(this._hooks))
	            .filter(function (_a) {
	            var route = _a.route;
	            return !!route;
	        })
	            .mergeMap(function (_a) {
	            var route = _a.route, routeParams = _a.routeParams, queryParams = _a.queryParams, isTerminal = _a.isTerminal;
	            if (isTerminal) {
	                var match_1 = {
	                    routes: [route],
	                    routeParams: routeParams,
	                    queryParams: queryParams,
	                    locationChange: locationChange
	                };
	                return Observable_1.Observable.of(route)
	                    .mergeMap(function (route) { return _this._loadIndex(route); })
	                    .map(function (index) {
	                    if (!!index) {
	                        match_1.routes.push(index);
	                    }
	                    return match_1;
	                });
	            }
	            return Observable_1.Observable.of(route)
	                .mergeMap(function (route) { return _this._loadChildRoutes(route); })
	                .mergeMap(function (childRoutes) { return _this._matchRoutes(queryParams, locationChange, pathname, remainingPathname, childRoutes, paramNames, paramValues); })
	                .map(function (match) {
	                if (!!match) {
	                    match.routes.unshift(route);
	                    return match;
	                }
	                return null;
	            });
	        });
	    };
	    RouteTraverser.prototype._loadChildRoutes = function (route) {
	        return this._loader.load(route.children, route.loadChildren, []);
	    };
	    RouteTraverser.prototype._loadIndex = function (route) {
	        return this._loader.load(route.index, route.loadIndex, null);
	    };
	    RouteTraverser = __decorate([
	        core_1.Injectable(),
	        __param(1, core_1.Inject(route_1.ROUTES)),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject(exports.TRAVERSAL_HOOKS)), 
	        __metadata('design:paramtypes', [resource_loader_1.ResourceLoader, Array, Array])
	    ], RouteTraverser);
	    return RouteTraverser;
	}());
	exports.RouteTraverser = RouteTraverser;
	exports.MATCH_ROUTE_PROVIDERS = [
	    new core_1.Provider(RouteTraverser, { useClass: RouteTraverser })
	];
	//# sourceMappingURL=route-traverser.js.map

/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(385);
	var EmptyObservable_1 = __webpack_require__(143);
	var isScheduler_1 = __webpack_require__(150);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 144 */,
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var Notification_1 = __webpack_require__(659);
	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification, destination = arg.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(40);
	var Subscription_1 = __webpack_require__(86);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 151 */
/***/ function(module, exports) {

	// TODO(kara): Revisit why error messages are not being properly set.
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Wrapper around Error that sets the error message.
	 */
	var MdError = (function (_super) {
	    __extends(MdError, _super);
	    function MdError(value) {
	        _super.call(this);
	        _super.prototype.message = value;
	    }
	    return MdError;
	}(Error));
	exports.MdError = MdError;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/errors/error.js.map

/***/ },
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ function(module, exports) {

	"use strict";
	function flatten(list) {
	    return list.reduce(function (items, next) {
	        if (Array.isArray(next)) {
	            return items.concat(flatten(next));
	        }
	        return items.concat(next);
	    }, []);
	}
	exports.flatten = flatten;
	function toPayload(update) {
	    return update.action.payload;
	}
	exports.toPayload = toPayload;
	function all() {
	    return false;
	}
	exports.all = all;


/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";
	exports.routerActions = {
	    GO: '[Router] Go',
	    REPLACE: '[Router] Replace',
	    SEARCH: '[Router] Search',
	    BACK: '[Router] Back',
	    FORWARD: '[Router] Forward',
	    UPDATE_LOCATION: '[Router] Update Location'
	};
	exports.routerActionTypes = Object.keys(exports.routerActions).map(function (key) { return exports.routerActions[key]; });
	function go(path, query) {
	    var payload = { path: path, query: query };
	    return { type: exports.routerActions.GO, payload: payload };
	}
	exports.go = go;
	function replace(path, query) {
	    var payload = { path: path, query: query };
	    return { type: exports.routerActions.REPLACE, payload: payload };
	}
	exports.replace = replace;
	function search(query) {
	    var payload = { query: query };
	    return { type: exports.routerActions.SEARCH, payload: payload };
	}
	exports.search = search;
	function back() {
	    var payload = {};
	    return { type: exports.routerActions.BACK, payload: payload };
	}
	exports.back = back;
	function forward() {
	    var payload = {};
	    return { type: exports.routerActions.FORWARD, payload: payload };
	}
	exports.forward = forward;
	//# sourceMappingURL=actions.js.map

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(33);
	__webpack_require__(103);
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(3);
	var resource_loader_1 = __webpack_require__(211);
	var hooks_1 = __webpack_require__(209);
	exports.PRE_RENDER_HOOKS = new core_1.OpaqueToken('@ngrx/router Pre-Render Hooks');
	exports.POST_RENDER_HOOKS = new core_1.OpaqueToken('@ngrx/router Post-Render Hooks');
	var ComponentRenderer = (function () {
	    function ComponentRenderer(_loader, _compiler, _preRenderHooks, _postRenderHooks) {
	        this._loader = _loader;
	        this._compiler = _compiler;
	        this._preRenderHooks = _preRenderHooks;
	        this._postRenderHooks = _postRenderHooks;
	    }
	    ComponentRenderer.prototype.render = function (route, components, injector, ref, providers) {
	        var _this = this;
	        return Observable_1.Observable.of(route)
	            .mergeMap(function (route) { return _this._loadComponent(components); })
	            .map(function (component) {
	            return { component: component, injector: injector, providers: providers };
	        })
	            .let(hooks_1.composeHooks(this._preRenderHooks))
	            .mergeMap(function (instruction) {
	            var instructionInjector = core_1.ReflectiveInjector.resolveAndCreate(instruction.providers, injector);
	            var component = instruction.component;
	            return _this._compiler.resolveComponent(component)
	                .then(function (comp) { return ref.createComponent(comp, null, instructionInjector); });
	        })
	            .let(hooks_1.composeHooks(this._postRenderHooks));
	    };
	    ComponentRenderer.prototype._loadComponent = function (route) {
	        return this._loader.load(route.component, route.loadComponent);
	    };
	    ComponentRenderer = __decorate([
	        core_1.Injectable(),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject(exports.PRE_RENDER_HOOKS)),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Inject(exports.POST_RENDER_HOOKS)), 
	        __metadata('design:paramtypes', [resource_loader_1.ResourceLoader, core_1.ComponentResolver, Array, Array])
	    ], ComponentRenderer);
	    return ComponentRenderer;
	}());
	exports.ComponentRenderer = ComponentRenderer;
	exports.COMPONENT_RENDERER_PROVIDERS = [
	    new core_1.Provider(ComponentRenderer, { useClass: ComponentRenderer })
	];
	//# sourceMappingURL=component-renderer.js.map

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var compose_1 = __webpack_require__(333);
	exports.identity = {
	    apply: function (input$) {
	        return input$;
	    }
	};
	function composeHooks(hooks) {
	    var allHooks = !hooks ? [exports.identity] : [exports.identity].concat(hooks);
	    var resolved = allHooks.map(function (hook) { return function (input$) { return hook.apply(input$); }; });
	    return compose_1.compose.apply(void 0, resolved);
	}
	exports.composeHooks = composeHooks;
	//# sourceMappingURL=hooks.js.map

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(78);
	/**
	 * The LinkTo directive links to routes in your app
	 *
	 * Links are pushed to the `Router` service to trigger a route change.
	 * Query params can be represented as an object or a string of names/values
	 *
	 * <a linkTo="/home/page" [queryParams]="{ id: 123 }">Home Page</a>
	 * <a [linkTo]="'/pages' + page.id">Page 1</a>
	 */
	var LinkTo = (function () {
	    function LinkTo(_router) {
	        this._router = _router;
	    }
	    Object.defineProperty(LinkTo.prototype, "linkTo", {
	        set: function (href) {
	            this._href = href;
	            this._updateHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LinkTo.prototype, "queryParams", {
	        set: function (params) {
	            this._query = params;
	            this._updateHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Handles click events on the associated link
	     * Prevents default action for non-combination click events without a target
	     */
	    LinkTo.prototype.onClick = function (event) {
	        if (!this._comboClick(event) && !this.target) {
	            this._router.go(this._href, this._query);
	            event.preventDefault();
	        }
	    };
	    LinkTo.prototype._updateHref = function () {
	        var path = this._cleanUpHref(this._href);
	        this.linkHref = this._router.prepareExternalUrl(path, this._query);
	    };
	    /**
	     * Determines whether the click event happened with a combination of other keys
	     */
	    LinkTo.prototype._comboClick = function (event) {
	        var buttonEvent = event.which || event.button;
	        return (buttonEvent > 1 || event.ctrlKey || event.metaKey || event.shiftKey);
	    };
	    LinkTo.prototype._cleanUpHref = function (href) {
	        if (href === void 0) { href = ''; }
	        // Check for trailing slashes in the path
	        while (href.length > 1 && href.substr(-1) === '/') {
	            // Remove trailing slashes
	            href = href.substring(0, href.length - 1);
	        }
	        return href;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], LinkTo.prototype, "target", void 0);
	    __decorate([
	        core_1.HostBinding('attr.href'), 
	        __metadata('design:type', Object)
	    ], LinkTo.prototype, "linkHref", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String), 
	        __metadata('design:paramtypes', [String])
	    ], LinkTo.prototype, "linkTo", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], LinkTo.prototype, "queryParams", null);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], LinkTo.prototype, "onClick", null);
	    LinkTo = __decorate([
	        core_1.Directive({ selector: '[linkTo]' }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], LinkTo);
	    return LinkTo;
	}());
	exports.LinkTo = LinkTo;
	//# sourceMappingURL=link-to.js.map

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ResourceLoader = (function () {
	    function ResourceLoader() {
	    }
	    ResourceLoader.prototype.load = function (sync, async, defaultValue) {
	        if (!!sync) {
	            return Promise.resolve(sync);
	        }
	        else if (!!async) {
	            return Promise.resolve(async());
	        }
	        return Promise.resolve(defaultValue);
	    };
	    ResourceLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ResourceLoader);
	    return ResourceLoader;
	}());
	exports.ResourceLoader = ResourceLoader;
	exports.RESOURCE_LOADER_PROVIDERS = [
	    new core_1.Provider(ResourceLoader, { useClass: ResourceLoader })
	];
	//# sourceMappingURL=resource-loader.js.map

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	exports.ROUTES = new core_1.OpaqueToken('@ngrx/router Init Routes');
	function getNamedComponents(route, name) {
	    if (!route) {
	        return { component: null, loadComponent: null };
	    }
	    if (!name) {
	        return { component: route.component, loadComponent: route.loadComponent };
	    }
	    var components = route.components || {};
	    var loadComponents = route.loadComponents || {};
	    return { component: components[name], loadComponent: loadComponents[name] };
	}
	exports.getNamedComponents = getNamedComponents;
	//# sourceMappingURL=route.js.map

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(33);
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(127);
	var GoogleBooksService = (function () {
	    function GoogleBooksService(http) {
	        this.http = http;
	        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
	    }
	    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
	        return this.http.get(this.API_PATH + "?q=" + queryTitle)
	            .map(function (res) { return res.json().items; });
	    };
	    GoogleBooksService.prototype.retrieveBook = function (volumeId) {
	        return this.http.get(this.API_PATH + "/" + volumeId)
	            .map(function (res) { return res.json(); });
	    };
	    GoogleBooksService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], GoogleBooksService);
	    return GoogleBooksService;
	}());
	exports.GoogleBooksService = GoogleBooksService;


/***/ },
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var catch_1 = __webpack_require__(682);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var do_1 = __webpack_require__(685);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 238 */,
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(703);
	var FutureAction_1 = __webpack_require__(146);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(40);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(104);
	/**
	 * The compose function is one of our most handy tools. In basic terms, you give
	 * it any number of functions and it returns a function. This new function
	 * takes a value and chains it through every composed function, returning
	 * the output.
	 *
	 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
	 */
	var compose_1 = __webpack_require__(333);
	/**
	 * storeLogger is a powerful metareducer that logs out each time we dispatch
	 * an action.
	 *
	 * A metareducer wraps a reducer function and returns a new reducer function
	 * with superpowers. They are handy for all sorts of tasks, including
	 * logging, undo/redo, and more.
	 */
	var ngrx_store_logger_1 = __webpack_require__(655);
	/**
	 * combineReducers is another useful metareducer that takes a map of reducer
	 * functions and creates a new reducer that stores the gathers the values
	 * of each reducer and stores them using the reducer's key. Think of it
	 * almost like a database, where every reducer is a table in the db.
	 *
	 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
	 */
	var store_1 = __webpack_require__(69);
	/**
	 * @ngrx/router-store keeps the router in sync with @ngrx/store. To connect the
	 * two, we need to use the routerReducer.
	 */
	var router_store_1 = __webpack_require__(340);
	/**
	 * Every reducer module's default export is the reducer function itself. In
	 * addition, each module should export a type or interface that describes
	 * the state of the reducer plus any selector functions. The `* as`
	 * notation packages up all of the exports into a single object.
	 */
	var search_1 = __webpack_require__(498), fromSearch = search_1;
	var books_1 = __webpack_require__(496), fromBooks = books_1;
	var collection_1 = __webpack_require__(497), fromCollection = collection_1;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = compose_1.compose(ngrx_store_logger_1.storeLogger(), store_1.combineReducers)({
	    router: router_store_1.routerReducer,
	    search: search_1.default,
	    books: books_1.default,
	    collection: collection_1.default
	});
	/**
	 * A selector function is a map function factory. We pass it parameters and it
	 * returns a function that maps from the larger state tree into a smaller
	 * piece of state. This selector simply selects the `books` state.
	 *
	 * Selectors are used with the `let` operator. They take an input observable
	 * and return a new observable. Here's how you would use this selector:
	 *
	 * ```ts
	 * class MyComponent {
	 * 	constructor(state$: Observable<AppState>) {
	 * 	  this.booksState$ = state$.let(getBooksState());
	 * 	}
	 * }
	 * ```
	 */
	function getBooksState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.books; }); };
	}
	exports.getBooksState = getBooksState;
	/**
	 * Every reducer module exports selector functions, however child reducers
	 * have no knowledge of the overall state tree. To make them useable, we
	 * need to make new selectors that wrap them.
	 *
	 * Once again our compose function comes in handy. From right to left, we
	 * first select the books state then we pass the state to the book
	 * reducer's getBooks selector, finally returning an observable
	 * of search results.
	 */
	function getBookEntities() {
	    return compose_1.compose(fromBooks.getBookEntities(), getBooksState());
	}
	exports.getBookEntities = getBookEntities;
	function getBook(id) {
	    return compose_1.compose(fromBooks.getBook(id), getBooksState());
	}
	exports.getBook = getBook;
	function hasBook(id) {
	    return compose_1.compose(fromBooks.hasBook(id), getBooksState());
	}
	exports.hasBook = hasBook;
	function getBooks(bookIds) {
	    return compose_1.compose(fromBooks.getBooks(bookIds), getBooksState());
	}
	exports.getBooks = getBooks;
	/**
	 * Just like with the books selectors, we also have to compose the search
	 * reducer's and collection reducer's selectors.
	 */
	function getSearchState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.search; }); };
	}
	exports.getSearchState = getSearchState;
	function getSearchBookIds() {
	    return compose_1.compose(fromSearch.getBookIds(), getSearchState());
	}
	exports.getSearchBookIds = getSearchBookIds;
	function getSearchStatus() {
	    return compose_1.compose(fromSearch.getStatus(), getSearchState());
	}
	exports.getSearchStatus = getSearchStatus;
	function getSearchQuery() {
	    return compose_1.compose(fromSearch.getQuery(), getSearchState());
	}
	exports.getSearchQuery = getSearchQuery;
	/**
	 * Some selector functions create joins across parts of state. This selector
	 * composes the search result IDs to return an array of books in the store.
	 */
	function getSearchResults() {
	    return function (state$) { return state$
	        .let(getSearchBookIds())
	        .switchMap(function (bookIds) { return state$.let(getBooks(bookIds)); }); };
	}
	exports.getSearchResults = getSearchResults;
	function getCollectionState() {
	    return function (state$) { return state$
	        .select(function (s) { return s.collection; }); };
	}
	exports.getCollectionState = getCollectionState;
	function getCollectionLoaded() {
	    return compose_1.compose(fromCollection.getLoaded(), getCollectionState());
	}
	exports.getCollectionLoaded = getCollectionLoaded;
	function getCollectionLoading() {
	    return compose_1.compose(fromCollection.getLoading(), getCollectionState());
	}
	exports.getCollectionLoading = getCollectionLoading;
	function getCollectionBookIds() {
	    return compose_1.compose(fromCollection.getBookIds(), getCollectionState());
	}
	exports.getCollectionBookIds = getCollectionBookIds;
	function isBookInCollection(id) {
	    return compose_1.compose(fromCollection.isBookInCollection(id), getCollectionState());
	}
	exports.isBookInCollection = isBookInCollection;
	function getBookCollection() {
	    return function (state$) { return state$
	        .let(getCollectionBookIds())
	        .switchMap(function (bookIds) { return state$.let(getBooks(bookIds)); }); };
	}
	exports.getBookCollection = getBookCollection;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(70);
	exports.LocationStrategy = common_1.LocationStrategy;
	exports.PathLocationStrategy = common_1.PathLocationStrategy;
	exports.HashLocationStrategy = common_1.HashLocationStrategy;
	// Providers
	var router_1 = __webpack_require__(78);
	var router_instruction_1 = __webpack_require__(97);
	var redirect_1 = __webpack_require__(488);
	var route_1 = __webpack_require__(212);
	exports.ROUTES = route_1.ROUTES;
	var guard_1 = __webpack_require__(487);
	var route_traverser_1 = __webpack_require__(132);
	var component_renderer_1 = __webpack_require__(208);
	var params_1 = __webpack_require__(343);
	var resource_loader_1 = __webpack_require__(211);
	// Directives
	var link_to_1 = __webpack_require__(210);
	var link_active_1 = __webpack_require__(341);
	var route_view_1 = __webpack_require__(344);
	// Export all router providers
	exports.ROUTER_PROVIDERS = [
	    component_renderer_1.COMPONENT_RENDERER_PROVIDERS,
	    guard_1.GUARD_PROVIDERS,
	    route_traverser_1.MATCH_ROUTE_PROVIDERS,
	    params_1.PARAMS_PROVIDERS,
	    redirect_1.REDIRECT_PROVIDERS,
	    resource_loader_1.RESOURCE_LOADER_PROVIDERS,
	    router_instruction_1.ROUTER_INSTRUCTION_PROVIDERS,
	    router_1.ROUTER_PROVIDERS
	];
	// Export all router directives
	exports.ROUTER_DIRECTIVES = [
	    link_to_1.LinkTo,
	    link_active_1.LinkActive,
	    route_view_1.RouteView
	];
	// Export ROUTES opaque token and location strategy services
	// Export utility function for setting up providers
	function provideRouter(routes, locationStrategy) {
	    if (locationStrategy === void 0) { locationStrategy = common_1.PathLocationStrategy; }
	    return [
	        core_1.provide(common_1.LocationStrategy, { useClass: locationStrategy }),
	        core_1.provide(route_1.ROUTES, { useValue: routes }),
	        core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.ROUTER_DIRECTIVES, multi: true }),
	        exports.ROUTER_PROVIDERS
	    ];
	}
	exports.provideRouter = provideRouter;
	var router_2 = __webpack_require__(78);
	exports.Router = router_2.Router;
	var params_2 = __webpack_require__(343);
	exports.RouteParams = params_2.RouteParams;
	exports.QueryParams = params_2.QueryParams;
	var router_instruction_2 = __webpack_require__(97);
	exports.ROUTER_HOOKS = router_instruction_2.ROUTER_HOOKS;
	exports.INSTRUCTION_HOOKS = router_instruction_2.INSTRUCTION_HOOKS;
	exports.LOCATION_CHANGES = router_instruction_2.LOCATION_CHANGES;
	exports.RouterInstruction = router_instruction_2.RouterInstruction;
	var component_renderer_2 = __webpack_require__(208);
	exports.PRE_RENDER_HOOKS = component_renderer_2.PRE_RENDER_HOOKS;
	exports.POST_RENDER_HOOKS = component_renderer_2.POST_RENDER_HOOKS;
	var route_traverser_2 = __webpack_require__(132);
	exports.TRAVERSAL_HOOKS = route_traverser_2.TRAVERSAL_HOOKS;
	var link_to_2 = __webpack_require__(210);
	exports.LinkTo = link_to_2.LinkTo;
	var link_active_2 = __webpack_require__(341);
	exports.LinkActive = link_active_2.LinkActive;
	var route_view_2 = __webpack_require__(344);
	exports.RouteView = route_view_2.RouteView;
	//# sourceMappingURL=index.js.map

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_1 = __webpack_require__(89);
	exports.BookActions = book_1.BookActions;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    book_1.BookActions
	];


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var distinctUntilChanged_1 = __webpack_require__(386);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var take_1 = __webpack_require__(698);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(127);
	var error_1 = __webpack_require__(151);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(663);
	__webpack_require__(102);
	__webpack_require__(33);
	__webpack_require__(87);
	__webpack_require__(236);
	__webpack_require__(670);
	__webpack_require__(666);
	__webpack_require__(235);
	/** Exception thrown when attempting to load an icon with a name that cannot be found. */
	var MdIconNameNotFoundError = (function (_super) {
	    __extends(MdIconNameNotFoundError, _super);
	    function MdIconNameNotFoundError(iconName) {
	        _super.call(this, "Unable to find icon with the name \"" + iconName + "\"");
	    }
	    return MdIconNameNotFoundError;
	}(error_1.MdError));
	exports.MdIconNameNotFoundError = MdIconNameNotFoundError;
	/**
	 * Exception thrown when attempting to load SVG content that does not contain the expected
	 * <svg> tag.
	 */
	var MdIconSvgTagNotFoundError = (function (_super) {
	    __extends(MdIconSvgTagNotFoundError, _super);
	    function MdIconSvgTagNotFoundError() {
	        _super.call(this, '<svg> tag not found');
	    }
	    return MdIconSvgTagNotFoundError;
	}(error_1.MdError));
	exports.MdIconSvgTagNotFoundError = MdIconSvgTagNotFoundError;
	/**
	  * Configuration for an icon, including the URL and possibly the cached SVG element.
	  * @internal
	  */
	var SvgIconConfig = (function () {
	    function SvgIconConfig(url) {
	        this.url = url;
	        this.svgElement = null;
	    }
	    return SvgIconConfig;
	}());
	/** Returns the cache key to use for an icon namespace and name. */
	var iconKey = function (namespace, name) { return namespace + ':' + name; };
	/**
	 * Service to register and display icons used by the <md-icon> component.
	 * - Registers icon URLs by namespace and name.
	 * - Registers icon set URLs by namespace.
	 * - Registers aliases for CSS classes, for use with icon fonts.
	 * - Loads icons from URLs and extracts individual icons from icon sets.
	 */
	var MdIconRegistry = (function () {
	    function MdIconRegistry(_http) {
	        this._http = _http;
	        /**
	         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
	         */
	        this._svgIconConfigs = new Map();
	        /**
	         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
	         * Multiple icon sets can be registered under the same namespace.
	         */
	        this._iconSetConfigs = new Map();
	        /** Cache for icons loaded by direct URLs. */
	        this._cachedIconsByUrl = new Map();
	        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
	        this._inProgressUrlFetches = new Map();
	        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
	        this._fontCssClassesByAlias = new Map();
	        /**
	         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
	         * The default 'material-icons' value assumes that the material icon font has been loaded as
	         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
	         */
	        this._defaultFontSetClass = 'material-icons';
	    }
	    /** Registers an icon by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
	        return this.addSvgIconInNamespace('', iconName, url);
	    };
	    /** Registers an icon by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
	        var key = iconKey(namespace, iconName);
	        this._svgIconConfigs.set(key, new SvgIconConfig(url));
	        return this;
	    };
	    /** Registers an icon set by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIconSet = function (url) {
	        return this.addSvgIconSetInNamespace('', url);
	    };
	    /** Registers an icon set by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
	        var config = new SvgIconConfig(url);
	        if (this._iconSetConfigs.has(namespace)) {
	            this._iconSetConfigs.get(namespace).push(config);
	        }
	        else {
	            this._iconSetConfigs.set(namespace, [config]);
	        }
	        return this;
	    };
	    /**
	     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
	     * component with the alias as the fontSet input will cause the class name to be applied
	     * to the <md-icon> element.
	     */
	    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
	        if (className === void 0) { className = alias; }
	        this._fontCssClassesByAlias.set(alias, className);
	        return this;
	    };
	    /**
	     * Returns the CSS class name associated with the alias by a previous call to
	     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
	     */
	    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
	        return this._fontCssClassesByAlias.get(alias) || alias;
	    };
	    /**
	     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
	        this._defaultFontSetClass = className;
	        return this;
	    };
	    /**
	     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
	        return this._defaultFontSetClass;
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
	     * The response from the URL may be cached so this will not always cause an HTTP request, but
	     * the produced element will always be a new copy of the originally fetched icon. (That is,
	     * it will not contain any modifications made to elements previously returned).
	     */
	    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
	        var _this = this;
	        if (this._cachedIconsByUrl.has(url)) {
	            return Observable_1.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
	        }
	        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
	            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
	            .map(function (svg) { return cloneSvg(svg); });
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
	     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
	     * if not, the Observable will throw an MdIconNameNotFoundError.
	     */
	    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
	        if (namespace === void 0) { namespace = ''; }
	        // Return (copy of) cached icon if possible.
	        var key = iconKey(namespace, name);
	        if (this._svgIconConfigs.has(key)) {
	            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
	        }
	        // See if we have any icon sets registered for the namespace.
	        var iconSetConfigs = this._iconSetConfigs.get(namespace);
	        if (iconSetConfigs) {
	            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
	        }
	        return Observable_1.Observable.throw(new MdIconNameNotFoundError(key));
	    };
	    /**
	     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
	     */
	    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
	        if (config.svgElement) {
	            // We already have the SVG element for this icon, return a copy.
	            return Observable_1.Observable.of(cloneSvg(config.svgElement));
	        }
	        else {
	            // Fetch the icon from the config's URL, cache it, and return a copy.
	            return this._loadSvgIconFromConfig(config)
	                .do(function (svg) { return config.svgElement = svg; })
	                .map(function (svg) { return cloneSvg(svg); });
	        }
	    };
	    /**
	     * Attempts to find an icon with the specified name in any of the SVG icon sets.
	     * First searches the available cached icons for a nested element with a matching name, and
	     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
	     * that have not been cached, and searches again after all fetches are completed.
	     * The returned Observable produces the SVG element if possible, and throws
	     * MdIconNameNotFoundError if no icon with the specified name can be found.
	     */
	    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
	        var _this = this;
	        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
	        // requested name.
	        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	        if (namedIcon) {
	            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
	            // time anyway, there's probably not much advantage compared to just always extracting
	            // it from the icon set.
	            return Observable_1.Observable.of(namedIcon);
	        }
	        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
	        // fetched, fetch them now and look for iconName in the results.
	        var iconSetFetchRequests = iconSetConfigs
	            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
	            .map(function (iconSetConfig) {
	            return _this._loadSvgIconSetFromConfig(iconSetConfig)
	                .catch(function (err, caught) {
	                // Swallow errors fetching individual URLs so the combined Observable won't
	                // necessarily fail.
	                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
	                return Observable_1.Observable.of(null);
	            })
	                .do(function (svg) {
	                // Cache SVG element.
	                if (svg) {
	                    iconSetConfig.svgElement = svg;
	                }
	            });
	        });
	        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
	        // cached SVG element (unless the request failed), and we can check again for the icon.
	        return Observable_1.Observable.forkJoin(iconSetFetchRequests)
	            .map(function (ignoredResults) {
	            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	            if (!foundIcon) {
	                throw new MdIconNameNotFoundError(name);
	            }
	            return foundIcon;
	        });
	    };
	    /**
	     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
	        // Iterate backwards, so icon sets added later have precedence.
	        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
	            var config = iconSetConfigs[i];
	            if (config.svgElement) {
	                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
	                if (foundIcon) {
	                    return foundIcon;
	                }
	            }
	        }
	        return null;
	    };
	    /**
	     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
	        var _this = this;
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
	    };
	    /**
	     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
	        var _this = this;
	        // TODO: Document that icons should only be loaded from trusted sources.
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._svgElementFromString(svgText); });
	    };
	    /**
	     * Creates a DOM element from the given SVG string, and adds default attributes.
	     */
	    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
	        var svg = this._svgElementFromString(responseText);
	        this._setSvgAttributes(svg, config);
	        return svg;
	    };
	    /**
	     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
	        var iconNode = iconSet.querySelector('#' + iconName);
	        if (!iconNode) {
	            return null;
	        }
	        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
	        // the content of a new <svg> node.
	        if (iconNode.tagName.toLowerCase() == 'svg') {
	            return this._setSvgAttributes(iconNode.cloneNode(true), config);
	        }
	        // createElement('SVG') doesn't work as expected; the DOM ends up with
	        // the correct nodes, but the SVG content doesn't render. Instead we
	        // have to create an empty SVG node using innerHTML and append its content.
	        // Elements created using DOMParser.parseFromString have the same problem.
	        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
	        var svg = this._svgElementFromString('<svg></svg>');
	        // Clone the node so we don't remove it from the parent icon set element.
	        svg.appendChild(iconNode.cloneNode(true));
	        return this._setSvgAttributes(svg, config);
	    };
	    /**
	     * Creates a DOM element from the given SVG string.
	     */
	    MdIconRegistry.prototype._svgElementFromString = function (str) {
	        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
	        // creating an element from an HTML string.
	        var div = document.createElement('DIV');
	        div.innerHTML = str;
	        var svg = div.querySelector('svg');
	        if (!svg) {
	            throw new MdIconSvgTagNotFoundError();
	        }
	        return svg;
	    };
	    /**
	     * Sets the default attributes for an SVG element to be used as an icon.
	     */
	    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
	        if (!svg.getAttribute('xmlns')) {
	            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	        }
	        svg.setAttribute('fit', '');
	        svg.setAttribute('height', '100%');
	        svg.setAttribute('width', '100%');
	        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
	        return svg;
	    };
	    /**
	     * Returns an Observable which produces the string contents of the given URL. Results may be
	     * cached, so future calls with the same URL may not cause another HTTP request.
	     */
	    MdIconRegistry.prototype._fetchUrl = function (url) {
	        var _this = this;
	        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
	        // already a request in progress for that URL. It's necessary to call share() on the
	        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
	        if (this._inProgressUrlFetches.has(url)) {
	            return this._inProgressUrlFetches.get(url);
	        }
	        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
	        // Observable. Figure out why and fix it.
	        var req = this._http.get(url)
	            .map(function (response) { return response.text(); })
	            .finally(function () {
	            _this._inProgressUrlFetches.delete(url);
	        })
	            .share();
	        this._inProgressUrlFetches.set(url, req);
	        return req;
	    };
	    MdIconRegistry = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MdIconRegistry);
	    return MdIconRegistry;
	}());
	exports.MdIconRegistry = MdIconRegistry;
	/** Clones an SVGElement while preserving type information. */
	function cloneSvg(svg) {
	    return svg.cloneNode(true);
	}
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/icon/icon-registry.js.map

/***/ },
/* 333 */
/***/ function(module, exports) {

	"use strict";
	exports.compose = function () {
	    var functions = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        functions[_i - 0] = arguments[_i];
	    }
	    return function (arg) {
	        if (functions.length === 0) {
	            return arg;
	        }
	        var last = functions[functions.length - 1];
	        var rest = functions.slice(0, -1);
	        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
	    };
	};
	//# sourceMappingURL=compose.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pluck_1 = __webpack_require__(692);
	var map_1 = __webpack_require__(237);
	var distinctUntilChanged_1 = __webpack_require__(386);
	function select(pathOrMapFn) {
	    var paths = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        paths[_i - 1] = arguments[_i];
	    }
	    var mapped$;
	    if (typeof pathOrMapFn === 'string') {
	        mapped$ = pluck_1.pluck.call.apply(pluck_1.pluck, [this, pathOrMapFn].concat(paths));
	    }
	    else if (typeof pathOrMapFn === 'function') {
	        mapped$ = map_1.map.call(this, pathOrMapFn);
	    }
	    else {
	        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
	            + " expected 'string' or 'function'");
	    }
	    return distinctUntilChanged_1.distinctUntilChanged.call(mapped$);
	}
	exports.select = select;
	//# sourceMappingURL=select.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(482));


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(382);
	var store_1 = __webpack_require__(69);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var metadata_1 = __webpack_require__(338);
	var util_1 = __webpack_require__(206);
	exports.BOOTSTRAP_EFFECTS = new core_1.OpaqueToken('@ngrx/effects Bootstrap Effects');
	function mergeEffects() {
	    var instances = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        instances[_i - 0] = arguments[_i];
	    }
	    var observables = util_1.flatten(instances).map(function (i) { return metadata_1.getEffectKeys(i).map(function (key) { return i[key]; }); });
	    return Observable_1.Observable.merge.apply(Observable_1.Observable, util_1.flatten(observables));
	}
	exports.mergeEffects = mergeEffects;
	function connectEffectsToStore(store, effects) {
	    return function () {
	        mergeEffects.apply(void 0, effects).subscribe(store);
	        return Promise.resolve(true);
	    };
	}
	exports.connectEffectsToStore = connectEffectsToStore;
	exports.CONNECT_EFFECTS_PROVIDER = new core_1.Provider(core_1.APP_INITIALIZER, {
	    multi: true,
	    deps: [store_1.Store, exports.BOOTSTRAP_EFFECTS],
	    useFactory: connectEffectsToStore
	});


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(338);
	exports.Effect = metadata_1.Effect;
	var effects_1 = __webpack_require__(336);
	exports.mergeEffects = effects_1.mergeEffects;
	var run_effects_1 = __webpack_require__(483);
	exports.runEffects = run_effects_1.runEffects;
	var state_updates_1 = __webpack_require__(339);
	exports.StateUpdates = state_updates_1.StateUpdates;
	var util_1 = __webpack_require__(206);
	exports.toPayload = util_1.toPayload;
	exports.all = util_1.all;


/***/ },
/* 338 */
/***/ function(module, exports) {

	"use strict";
	var METADATA_KEY = '@ngrx/effects';
	function Effect() {
	    return function (target, propertyName) {
	        if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
	            Reflect.defineMetadata(METADATA_KEY, [], target);
	        }
	        var effects = Reflect.getOwnMetadata(METADATA_KEY, target);
	        Reflect.defineMetadata(METADATA_KEY, effects.concat([propertyName]), target);
	    };
	}
	exports.Effect = Effect;
	function getEffectKeys(instance) {
	    var target = Object.getPrototypeOf(instance);
	    if (!Reflect.hasOwnMetadata(METADATA_KEY, target)) {
	        return [];
	    }
	    return Reflect.getOwnMetadata(METADATA_KEY, target);
	}
	exports.getEffectKeys = getEffectKeys;


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var withLatestFrom_1 = __webpack_require__(391);
	var filter_1 = __webpack_require__(387);
	var ReplaySubject_1 = __webpack_require__(380);
	var store_1 = __webpack_require__(69);
	var core_1 = __webpack_require__(1);
	var StateUpdates = (function (_super) {
	    __extends(StateUpdates, _super);
	    function StateUpdates(actions$, state$) {
	        var _this = this;
	        _super.call(this, 1);
	        withLatestFrom_1.withLatestFrom
	            .call(actions$, state$)
	            .subscribe(function (_a) {
	            var action = _a[0], state = _a[1];
	            _super.prototype.next.call(_this, { action: action, state: state });
	        });
	    }
	    StateUpdates.prototype.next = function (update) { };
	    StateUpdates.prototype.error = function (err) { };
	    StateUpdates.prototype.complete = function () { };
	    StateUpdates.prototype.whenAction = function () {
	        var actionTypes = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            actionTypes[_i - 0] = arguments[_i];
	        }
	        return filter_1.filter.call(this, function (_a) {
	            var action = _a.action;
	            return actionTypes.indexOf(action.type) > -1;
	        });
	    };
	    StateUpdates = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [store_1.Dispatcher, store_1.State])
	    ], StateUpdates);
	    return StateUpdates;
	}(ReplaySubject_1.ReplaySubject));
	exports.StateUpdates = StateUpdates;
	exports.STATE_UPDATES_PROVIDER = new core_1.Provider(StateUpdates, {
	    useClass: StateUpdates
	});


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var location_changes_1 = __webpack_require__(485);
	function connectRouterToStore() {
	    return [
	        location_changes_1.LOCATION_CHANGES_PROVIDER
	    ];
	}
	exports.connectRouterToStore = connectRouterToStore;
	var actions_1 = __webpack_require__(207);
	exports.go = actions_1.go;
	exports.replace = actions_1.replace;
	exports.search = actions_1.search;
	exports.back = actions_1.back;
	exports.forward = actions_1.forward;
	exports.routerActions = actions_1.routerActions;
	var reducer_1 = __webpack_require__(486);
	exports.routerReducer = reducer_1.routerReducer;
	//# sourceMappingURL=index.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var link_to_1 = __webpack_require__(210);
	var router_1 = __webpack_require__(78);
	/**
	 * The LinkActive directive toggles classes on elements that contain an active linkTo directive
	 *
	 * <a linkActive="active" linkTo="/home/page">Home Page</a>
	 * <ol>
	 *  <li linkActive="active" *ngFor="var link of links">
	 *    <a [linkTo]="'/link/' + link.id">{{ link.title }}</a>
	 *  </li>
	 * </ol>
	 */
	var LinkActive = (function () {
	    function LinkActive(links, element, router$, renderer) {
	        this.links = links;
	        this.element = element;
	        this.router$ = router$;
	        this.renderer = renderer;
	        this.activeClass = 'active';
	        this.activeOptions = { exact: true };
	    }
	    LinkActive.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this._sub = this.router$
	            .map(function (_a) {
	            var path = _a.path;
	            return _this.router$.prepareExternalUrl(path || '/');
	        })
	            .subscribe(function (path) {
	            _this.checkActive(path);
	        });
	    };
	    LinkActive.prototype.checkActive = function (path) {
	        var _this = this;
	        var active = this.links.reduce(function (active, current) {
	            var _a = current.linkHref.split('?'), href = _a[0], query = _a[1];
	            if (_this.activeOptions.exact) {
	                return active ? active : href === path;
	            }
	            else {
	                return active ? active : path.startsWith(href);
	            }
	        }, false);
	        var activeClasses = this.activeClass.split(' ');
	        activeClasses.forEach(function (activeClass) {
	            _this.renderer.setElementClass(_this.element.nativeElement, activeClass, active);
	        });
	    };
	    LinkActive.prototype.ngOnDestroy = function () {
	        if (this._sub) {
	            this._sub.unsubscribe();
	        }
	    };
	    __decorate([
	        core_1.Input('linkActive'), 
	        __metadata('design:type', String)
	    ], LinkActive.prototype, "activeClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], LinkActive.prototype, "activeOptions", void 0);
	    LinkActive = __decorate([
	        core_1.Directive({ selector: '[linkActive]' }),
	        __param(0, core_1.Query(link_to_1.LinkTo)), 
	        __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef, router_1.Router, core_1.Renderer])
	    ], LinkActive);
	    return LinkActive;
	}());
	exports.LinkActive = LinkActive;
	//# sourceMappingURL=link-active.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pathToRegexp = __webpack_require__(656);
	var REGEXP_CACHE = new Map();
	var COMPILED_CACHE = new Map();
	function getRegexp(pattern) {
	    if (!REGEXP_CACHE.has(pattern)) {
	        var keys = [];
	        var regexp = pathToRegexp(pattern, keys, { end: false });
	        REGEXP_CACHE.set(pattern, { keys: keys, regexp: regexp });
	    }
	    return REGEXP_CACHE.get(pattern);
	}
	exports.getRegexp = getRegexp;
	function getCompiled(pattern) {
	    if (!COMPILED_CACHE.has(pattern)) {
	        COMPILED_CACHE.set(pattern, pathToRegexp.compile(pattern));
	    }
	    return COMPILED_CACHE.get(pattern);
	}
	exports.getCompiled = getCompiled;
	function matchPattern(pattern, pathname) {
	    if (pattern.charAt(0) !== '/') {
	        pattern = "/" + pattern;
	    }
	    var compiled = getRegexp(pattern);
	    var match = compiled.regexp.exec(pathname);
	    if (!match) {
	        return {
	            remainingPathname: null,
	            paramNames: [],
	            paramValues: []
	        };
	    }
	    return {
	        remainingPathname: pathname.substr(match[0].length),
	        paramNames: compiled.keys.map(function (_a) {
	            var name = _a.name;
	            return name;
	        }),
	        paramValues: match.slice(1).map(function (value) { return value && decodeURIComponent(value); })
	    };
	}
	exports.matchPattern = matchPattern;
	function getParamNames(pattern) {
	    return getRegexp(pattern).keys.map(function (_a) {
	        var name = _a.name;
	        return name;
	    });
	}
	exports.getParamNames = getParamNames;
	function makeParams(paramNames, paramValues) {
	    var params = {};
	    var lastIndex = 0;
	    paramNames.forEach(function (paramName, index) {
	        if (typeof paramName === 'number') {
	            paramName = lastIndex++;
	        }
	        params[paramName] = paramValues && paramValues[index];
	    });
	    return params;
	}
	exports.makeParams = makeParams;
	function getParams(pattern, pathname) {
	    var _a = matchPattern(pattern, pathname), remainingPathname = _a.remainingPathname, paramNames = _a.paramNames, paramValues = _a.paramValues;
	    if (remainingPathname === null) {
	        return null;
	    }
	    return makeParams(paramNames, paramValues);
	}
	exports.getParams = getParams;
	function formatPattern(pattern, params) {
	    if (params === void 0) { params = {}; }
	    return getCompiled(pattern)(params);
	}
	exports.formatPattern = formatPattern;
	//# sourceMappingURL=match-pattern.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(33);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var router_instruction_1 = __webpack_require__(97);
	var RouteParams = (function (_super) {
	    __extends(RouteParams, _super);
	    function RouteParams() {
	        _super.apply(this, arguments);
	    }
	    return RouteParams;
	}(Observable_1.Observable));
	exports.RouteParams = RouteParams;
	var QueryParams = (function (_super) {
	    __extends(QueryParams, _super);
	    function QueryParams() {
	        _super.apply(this, arguments);
	    }
	    return QueryParams;
	}(Observable_1.Observable));
	exports.QueryParams = QueryParams;
	function createRouteParams(set$) {
	    return set$.map(function (next) { return next.routeParams; });
	}
	function createQueryParams(set$) {
	    return set$.map(function (next) { return next.queryParams; });
	}
	exports.PARAMS_PROVIDERS = [
	    new core_1.Provider(RouteParams, {
	        deps: [router_instruction_1.RouterInstruction],
	        useFactory: createRouteParams
	    }),
	    new core_1.Provider(QueryParams, {
	        deps: [router_instruction_1.RouterInstruction],
	        useFactory: createQueryParams
	    })
	];
	//# sourceMappingURL=params.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * As implemented this component is fairly complex. It listens to the RouteSet
	 * and renders the first component in the set's list. When rendering the
	 * component, it re-provides RouteSet modified to include the shortened list
	 * of components. Exposes a very powerful render middleware hook that could
	 * be used in the future for data resolving.
	 */
	__webpack_require__(236);
	__webpack_require__(33);
	__webpack_require__(87);
	__webpack_require__(247);
	__webpack_require__(106);
	var core_1 = __webpack_require__(1);
	var route_1 = __webpack_require__(212);
	var router_instruction_1 = __webpack_require__(97);
	var component_renderer_1 = __webpack_require__(208);
	var RouteView = (function () {
	    function RouteView(_name, _routerInstruction$, _injector, _renderer, _ref) {
	        this._name = _name;
	        this._routerInstruction$ = _routerInstruction$;
	        this._injector = _injector;
	        this._renderer = _renderer;
	        this._ref = _ref;
	        this._routerInstructionProvider = new core_1.Provider(router_instruction_1.RouterInstruction, {
	            useValue: this._routerInstruction$.map(function (set) {
	                return {
	                    locationChange: set.locationChange,
	                    routes: set.routes.slice().slice(1),
	                    routeParams: set.routeParams,
	                    queryParams: set.queryParams
	                };
	            })
	        });
	    }
	    RouteView.prototype.ngOnInit = function () {
	        var _this = this;
	        this._sub = this._routerInstruction$
	            .map(function (set) {
	            var route = set.routes[0];
	            var components = route_1.getNamedComponents(route, _this._name);
	            return { route: route, components: components };
	        })
	            .distinctUntilChanged(function (prev, next) {
	            return prev.components.component === next.components.component
	                && prev.components.loadComponent === next.components.loadComponent;
	        })
	            .do(function (ins) { return _this._cleanPreviousRef(); })
	            .filter(function (_a) {
	            var components = _a.components;
	            return !!components.component || !!components.loadComponent;
	        })
	            .switchMap(function (_a) {
	            var route = _a.route, components = _a.components;
	            return _this._renderer.render(route, components, _this._injector, _this._ref, [_this._routerInstructionProvider]);
	        })
	            .subscribe(function (ref) { return _this._prev = ref; });
	    };
	    RouteView.prototype.ngOnDestroy = function () {
	        this._cleanPreviousRef();
	        this._sub.unsubscribe();
	    };
	    RouteView.prototype._cleanPreviousRef = function () {
	        if (this._prev) {
	            this._prev.destroy();
	            this._prev = null;
	        }
	    };
	    RouteView = __decorate([
	        core_1.Component({
	            selector: 'route-view',
	            providers: [],
	            template: ""
	        }),
	        __param(0, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [String, router_instruction_1.RouterInstruction, core_1.Injector, component_renderer_1.ComponentRenderer, core_1.ViewContainerRef])
	    ], RouteView);
	    return RouteView;
	}());
	exports.RouteView = RouteView;
	//# sourceMappingURL=route-view.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(96);
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        _super.call(this, { type: Dispatcher.INIT });
	    }
	    Dispatcher.prototype.dispatch = function (action) {
	        this.next(action);
	    };
	    Dispatcher.prototype.complete = function () {
	        // noop
	    };
	    Dispatcher.INIT = '@ngrx/store/init';
	    return Dispatcher;
	}(SyncSubject_1.SyncSubject));
	exports.Dispatcher = Dispatcher;


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(96);
	var Reducer = (function (_super) {
	    __extends(Reducer, _super);
	    function Reducer(_dispatcher, initialReducer) {
	        _super.call(this, initialReducer);
	        this._dispatcher = _dispatcher;
	    }
	    Reducer.prototype.replaceReducer = function (reducer) {
	        this.next(reducer);
	        this._dispatcher.dispatch({ type: Reducer.REPLACE });
	    };
	    Reducer.REPLACE = '@ngrx/store/replace-reducer';
	    return Reducer;
	}(SyncSubject_1.SyncSubject));
	exports.Reducer = Reducer;


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var withLatestFrom_1 = __webpack_require__(391);
	var scan_1 = __webpack_require__(694);
	var observeOn_1 = __webpack_require__(145);
	var queue_1 = __webpack_require__(392);
	var SyncSubject_1 = __webpack_require__(96);
	var State = (function (_super) {
	    __extends(State, _super);
	    function State(_initialState, action$, reducer$) {
	        var _this = this;
	        _super.call(this, _initialState);
	        var actionInQueue$ = observeOn_1.observeOn.call(action$, queue_1.queue);
	        var actionAndReducer$ = withLatestFrom_1.withLatestFrom.call(actionInQueue$, reducer$);
	        var state$ = scan_1.scan.call(actionAndReducer$, function (state, _a) {
	            var action = _a[0], reducer = _a[1];
	            return reducer(state, action);
	        }, _initialState);
	        state$.subscribe(function (value) { return _this.next(value); });
	    }
	    return State;
	}(SyncSubject_1.SyncSubject));
	exports.State = State;


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var SyncSubject_1 = __webpack_require__(96);
	var select_1 = __webpack_require__(334);
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(_dispatcher, _reducer, state$, initialState) {
	        var _this = this;
	        _super.call(this, initialState);
	        this._dispatcher = _dispatcher;
	        this._reducer = _reducer;
	        this.select = select_1.select.bind(this);
	        state$.subscribe(function (state) { return _super.prototype.next.call(_this, state); });
	    }
	    Store.prototype.replaceReducer = function (reducer) {
	        this._reducer.replaceReducer(reducer);
	    };
	    Store.prototype.dispatch = function (action) {
	        this._dispatcher.dispatch(action);
	    };
	    Store.prototype.next = function (action) {
	        this._dispatcher.dispatch(action);
	    };
	    Store.prototype.error = function (err) {
	        this._dispatcher.error(err);
	    };
	    Store.prototype.complete = function () {
	        // noop
	    };
	    return Store;
	}(SyncSubject_1.SyncSubject));
	exports.Store = Store;


/***/ },
/* 349 */
/***/ function(module, exports) {

	"use strict";
	function combineReducers(reducers) {
	    var reducerKeys = Object.keys(reducers);
	    var finalReducers = {};
	    for (var i = 0; i < reducerKeys.length; i++) {
	        var key = reducerKeys[i];
	        if (typeof reducers[key] === 'function') {
	            finalReducers[key] = reducers[key];
	        }
	    }
	    var finalReducerKeys = Object.keys(finalReducers);
	    return function combination(state, action) {
	        if (state === void 0) { state = {}; }
	        var hasChanged = false;
	        var nextState = {};
	        for (var i = 0; i < finalReducerKeys.length; i++) {
	            var key = finalReducerKeys[i];
	            var reducer = finalReducers[key];
	            var previousStateForKey = state[key];
	            var nextStateForKey = reducer(previousStateForKey, action);
	            nextState[key] = nextStateForKey;
	            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	        }
	        return hasChanged ? nextState : state;
	    };
	}
	exports.combineReducers = combineReducers;


/***/ },
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(712);

	function encode(value, strict) {
		return strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		opts = opts || {};

		var strict = opts.strict !== false;

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().sort().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, strict));
					} else {
						result.push(encode(key, strict) + '=' + encode(val2, strict));
					}
				});

				return result.join('&');
			}

			return encode(key, strict) + '=' + encode(val, strict);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(36);
	var queue_1 = __webpack_require__(392);
	var observeOn_1 = __webpack_require__(145);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var from_1 = __webpack_require__(679);
	Observable_1.Observable.from = from_1.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var merge_1 = __webpack_require__(680);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(145);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var toArray_1 = __webpack_require__(699);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var tryCatch_1 = __webpack_require__(243);
	var errorObject_1 = __webpack_require__(147);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(85);
	var subscribeToResult_1 = __webpack_require__(88);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(88);
	var OuterSubscriber_1 = __webpack_require__(85);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(673);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(85);
	var subscribeToResult_1 = __webpack_require__(88);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(239);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 393 */,
/* 394 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var MdList = (function () {
	    function MdList() {
	    }
	    MdList = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-list, md-nav-list',
	            host: { 'role': 'list' },
	            template: '<ng-content></ng-content>',
	            styles: ["/*  Normal list variables */ /* Dense list variables */ /* This mixin provides all list-item styles, changing font size and height based on whether the list is in dense mode. */ /* This mixin provides all md-line styles, changing secondary font size based on whether the list is in dense mode. */ /* This mixin provides all subheader styles, adjusting heights and padding based on whether the list is in dense mode. */ md-list, md-nav-list { padding-top: 8px; display: block; } md-list [md-subheader], md-nav-list [md-subheader] { display: block; box-sizing: border-box; height: 48px; padding: 16px; margin: 0; font-size: 14px; font-weight: 500; color: rgba(0, 0, 0, 0.54); } md-list [md-subheader]:first-child, md-nav-list [md-subheader]:first-child { margin-top: -8px; } md-list md-list-item .md-list-item, md-list a[md-list-item] .md-list-item, md-nav-list md-list-item .md-list-item, md-nav-list a[md-list-item] .md-list-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-family: Roboto, \"Helvetica Neue\", sans-serif; box-sizing: border-box; font-size: 16px; height: 48px; padding: 0 16px; } md-list md-list-item.md-list-avatar .md-list-item, md-list a[md-list-item].md-list-avatar .md-list-item, md-nav-list md-list-item.md-list-avatar .md-list-item, md-nav-list a[md-list-item].md-list-avatar .md-list-item { height: 56px; } md-list md-list-item.md-2-line .md-list-item, md-list a[md-list-item].md-2-line .md-list-item, md-nav-list md-list-item.md-2-line .md-list-item, md-nav-list a[md-list-item].md-2-line .md-list-item { height: 72px; } md-list md-list-item.md-3-line .md-list-item, md-list a[md-list-item].md-3-line .md-list-item, md-nav-list md-list-item.md-3-line .md-list-item, md-nav-list a[md-list-item].md-3-line .md-list-item { height: 88px; } md-list md-list-item .md-list-text, md-list a[md-list-item] .md-list-text, md-nav-list md-list-item .md-list-text, md-nav-list a[md-list-item] .md-list-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; padding: 0 16px; box-sizing: border-box; overflow: hidden; } md-list md-list-item .md-list-text:first-child, md-list a[md-list-item] .md-list-text:first-child, md-nav-list md-list-item .md-list-text:first-child, md-nav-list a[md-list-item] .md-list-text:first-child { padding: 0; } md-list md-list-item .md-list-text:empty, md-list a[md-list-item] .md-list-text:empty, md-nav-list md-list-item .md-list-text:empty, md-nav-list a[md-list-item] .md-list-text:empty { display: none; } md-list md-list-item .md-list-text > *, md-list a[md-list-item] .md-list-text > *, md-nav-list md-list-item .md-list-text > *, md-nav-list a[md-list-item] .md-list-text > * { margin: 0; padding: 0; font-weight: normal; font-size: inherit; } md-list md-list-item [md-list-avatar], md-list a[md-list-item] [md-list-avatar], md-nav-list md-list-item [md-list-avatar], md-nav-list a[md-list-item] [md-list-avatar] { width: 40px; height: 40px; border-radius: 50%; } md-list md-list-item [md-list-icon], md-list a[md-list-item] [md-list-icon], md-nav-list md-list-item [md-list-icon], md-nav-list a[md-list-item] [md-list-icon] { width: 24px; height: 24px; border-radius: 50%; padding: 4px; } md-list md-list-item [md-line], md-list a[md-list-item] [md-line], md-nav-list md-list-item [md-line], md-nav-list a[md-list-item] [md-line] { display: block; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; box-sizing: border-box; } md-list md-list-item [md-line]:nth-child(n+2), md-list a[md-list-item] [md-line]:nth-child(n+2), md-nav-list md-list-item [md-line]:nth-child(n+2), md-nav-list a[md-list-item] [md-line]:nth-child(n+2) { font-size: 14px; } md-list[dense], md-nav-list[dense] { padding-top: 4px; display: block; } md-list[dense] [md-subheader], md-nav-list[dense] [md-subheader] { display: block; box-sizing: border-box; height: 40px; padding: 16px; margin: 0; font-size: 13px; font-weight: 500; color: rgba(0, 0, 0, 0.54); } md-list[dense] [md-subheader]:first-child, md-nav-list[dense] [md-subheader]:first-child { margin-top: -4px; } md-list[dense] md-list-item .md-list-item, md-list[dense] a[md-list-item] .md-list-item, md-nav-list[dense] md-list-item .md-list-item, md-nav-list[dense] a[md-list-item] .md-list-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-family: Roboto, \"Helvetica Neue\", sans-serif; box-sizing: border-box; font-size: 13px; height: 40px; padding: 0 16px; } md-list[dense] md-list-item.md-list-avatar .md-list-item, md-list[dense] a[md-list-item].md-list-avatar .md-list-item, md-nav-list[dense] md-list-item.md-list-avatar .md-list-item, md-nav-list[dense] a[md-list-item].md-list-avatar .md-list-item { height: 48px; } md-list[dense] md-list-item.md-2-line .md-list-item, md-list[dense] a[md-list-item].md-2-line .md-list-item, md-nav-list[dense] md-list-item.md-2-line .md-list-item, md-nav-list[dense] a[md-list-item].md-2-line .md-list-item { height: 60px; } md-list[dense] md-list-item.md-3-line .md-list-item, md-list[dense] a[md-list-item].md-3-line .md-list-item, md-nav-list[dense] md-list-item.md-3-line .md-list-item, md-nav-list[dense] a[md-list-item].md-3-line .md-list-item { height: 76px; } md-list[dense] md-list-item .md-list-text, md-list[dense] a[md-list-item] .md-list-text, md-nav-list[dense] md-list-item .md-list-text, md-nav-list[dense] a[md-list-item] .md-list-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; padding: 0 16px; box-sizing: border-box; overflow: hidden; } md-list[dense] md-list-item .md-list-text:first-child, md-list[dense] a[md-list-item] .md-list-text:first-child, md-nav-list[dense] md-list-item .md-list-text:first-child, md-nav-list[dense] a[md-list-item] .md-list-text:first-child { padding: 0; } md-list[dense] md-list-item .md-list-text:empty, md-list[dense] a[md-list-item] .md-list-text:empty, md-nav-list[dense] md-list-item .md-list-text:empty, md-nav-list[dense] a[md-list-item] .md-list-text:empty { display: none; } md-list[dense] md-list-item .md-list-text > *, md-list[dense] a[md-list-item] .md-list-text > *, md-nav-list[dense] md-list-item .md-list-text > *, md-nav-list[dense] a[md-list-item] .md-list-text > * { margin: 0; padding: 0; font-weight: normal; font-size: inherit; } md-list[dense] md-list-item [md-list-avatar], md-list[dense] a[md-list-item] [md-list-avatar], md-nav-list[dense] md-list-item [md-list-avatar], md-nav-list[dense] a[md-list-item] [md-list-avatar] { width: 40px; height: 40px; border-radius: 50%; } md-list[dense] md-list-item [md-list-icon], md-list[dense] a[md-list-item] [md-list-icon], md-nav-list[dense] md-list-item [md-list-icon], md-nav-list[dense] a[md-list-item] [md-list-icon] { width: 24px; height: 24px; border-radius: 50%; padding: 4px; } md-list[dense] md-list-item [md-line], md-list[dense] a[md-list-item] [md-line], md-nav-list[dense] md-list-item [md-line], md-nav-list[dense] a[md-list-item] [md-line] { display: block; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; box-sizing: border-box; } md-list[dense] md-list-item [md-line]:nth-child(n+2), md-list[dense] a[md-list-item] [md-line]:nth-child(n+2), md-nav-list[dense] md-list-item [md-line]:nth-child(n+2), md-nav-list[dense] a[md-list-item] [md-line]:nth-child(n+2) { font-size: 13px; } md-divider { display: block; border-top: 1px solid rgba(0, 0, 0, 0.12); margin: 0; } md-nav-list a { text-decoration: none; color: inherit; } md-nav-list .md-list-item { cursor: pointer; } md-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus { outline: none; background: rgba(0, 0, 0, 0.04); } "],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdList);
	    return MdList;
	}());
	exports.MdList = MdList;
	/* Need directive for a ContentChildren query in list-item */
	var MdLine = (function () {
	    function MdLine() {
	    }
	    MdLine = __decorate([
	        core_1.Directive({ selector: '[md-line]' }), 
	        __metadata('design:paramtypes', [])
	    ], MdLine);
	    return MdLine;
	}());
	exports.MdLine = MdLine;
	/* Need directive for a ContentChild query in list-item */
	var MdListAvatar = (function () {
	    function MdListAvatar() {
	    }
	    MdListAvatar = __decorate([
	        core_1.Directive({ selector: '[md-list-avatar]' }), 
	        __metadata('design:paramtypes', [])
	    ], MdListAvatar);
	    return MdListAvatar;
	}());
	exports.MdListAvatar = MdListAvatar;
	var MdListItem = (function () {
	    function MdListItem(_renderer, _element) {
	        this._renderer = _renderer;
	        this._element = _element;
	        /** @internal */
	        this.hasFocus = false;
	    }
	    /** @internal */
	    MdListItem.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this._setLineClass(this._lines.length);
	        this._lines.changes.subscribe(function () {
	            _this._setLineClass(_this._lines.length);
	        });
	    };
	    Object.defineProperty(MdListItem.prototype, "_hasAvatar", {
	        set: function (avatar) {
	            this._setClass('md-list-avatar', avatar != null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    MdListItem.prototype.handleFocus = function () {
	        this.hasFocus = true;
	    };
	    /** @internal */
	    MdListItem.prototype.handleBlur = function () {
	        this.hasFocus = false;
	    };
	    MdListItem.prototype._setLineClass = function (count) {
	        this._resetClasses();
	        if (count === 2 || count === 3) {
	            this._setClass("md-" + count + "-line", true);
	        }
	    };
	    MdListItem.prototype._resetClasses = function () {
	        this._setClass('md-2-line', false);
	        this._setClass('md-3-line', false);
	    };
	    MdListItem.prototype._setClass = function (className, bool) {
	        this._renderer.setElementClass(this._element.nativeElement, className, bool);
	    };
	    __decorate([
	        core_1.ContentChildren(MdLine), 
	        __metadata('design:type', core_1.QueryList)
	    ], MdListItem.prototype, "_lines", void 0);
	    __decorate([
	        core_1.ContentChild(MdListAvatar), 
	        __metadata('design:type', MdListAvatar), 
	        __metadata('design:paramtypes', [MdListAvatar])
	    ], MdListItem.prototype, "_hasAvatar", null);
	    MdListItem = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-list-item, a[md-list-item]',
	            host: {
	                'role': 'listitem',
	                '(focus)': 'handleFocus()',
	                '(blur)': 'handleBlur()',
	            },
	            template: "<div class=\"md-list-item\" [class.md-list-item-focus]=\"hasFocus\"> <ng-content select=\"[md-list-avatar],[md-list-icon]\"></ng-content> <div class=\"md-list-text\"><ng-content select=\"[md-line]\"></ng-content></div> <ng-content></ng-content> </div> ",
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], MdListItem);
	    return MdListItem;
	}());
	exports.MdListItem = MdListItem;
	exports.MD_LIST_DIRECTIVES = [MdList, MdListItem, MdLine, MdListAvatar];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/list/list.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	// TODO(jelbourn): Ink ripples.
	// TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
	// TODO(kara): Convert attribute selectors to classes when attr maps become available
	var MdButton = (function () {
	    function MdButton(elementRef, renderer) {
	        this.elementRef = elementRef;
	        this.renderer = renderer;
	        /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
	        this.isKeyboardFocused = false;
	        /** Whether a mousedown has occurred on this element in the last 100ms. */
	        this.isMouseDown = false;
	    }
	    Object.defineProperty(MdButton.prototype, "color", {
	        get: function () {
	            return this._color;
	        },
	        set: function (value) {
	            this._updateColor(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    MdButton.prototype.setMousedown = function () {
	        var _this = this;
	        // We only *show* the focus style when focus has come to the button via the keyboard.
	        // The Material Design spec is silent on this topic, and without doing this, the
	        // button continues to look :active after clicking.
	        // @see http://marcysutton.com/button-focus-hell/
	        this.isMouseDown = true;
	        setTimeout(function () { _this.isMouseDown = false; }, 100);
	    };
	    MdButton.prototype._updateColor = function (newColor) {
	        this._setElementColor(this._color, false);
	        this._setElementColor(newColor, true);
	        this._color = newColor;
	    };
	    MdButton.prototype._setElementColor = function (color, isAdd) {
	        if (color != null && color != '') {
	            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
	        }
	    };
	    /** @internal */
	    MdButton.prototype.setKeyboardFocus = function () {
	        this.isKeyboardFocused = !this.isMouseDown;
	    };
	    /** @internal */
	    MdButton.prototype.removeKeyboardFocus = function () {
	        this.isKeyboardFocused = false;
	    };
	    MdButton = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'button[md-button], button[md-raised-button], button[md-icon-button], ' +
	                'button[md-fab], button[md-mini-fab]',
	            inputs: ['color'],
	            host: {
	                '[class.md-button-focus]': 'isKeyboardFocused',
	                '(mousedown)': 'setMousedown()',
	                '(focus)': 'setKeyboardFocus()',
	                '(blur)': 'removeKeyboardFocus()',
	            },
	            template: "<span class=\"md-button-wrapper\"><ng-content></ng-content></span> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ [md-raised-button], [md-fab], [md-mini-fab], [md-button], [md-icon-button] { box-sizing: border-box; position: relative; background: transparent; text-align: center; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; outline: none; border: none; display: inline-block; white-space: nowrap; text-decoration: none; vertical-align: baseline; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; color: currentColor; margin: 0; min-width: 88px; line-height: 36px; padding: 0 16px; border-radius: 3px; } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab], .md-primary[md-button], .md-primary[md-icon-button] { color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab], .md-accent[md-button], .md-accent[md-icon-button] { color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab], .md-warn[md-button], .md-warn[md-icon-button] { color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-primary[disabled][md-button], .md-primary[disabled][md-icon-button], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-accent[disabled][md-button], .md-accent[disabled][md-icon-button], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], .md-warn[disabled][md-button], .md-warn[disabled][md-icon-button], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab], [disabled][disabled][md-button], [disabled][disabled][md-icon-button] { color: rgba(0, 0, 0, 0.38); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab], [disabled][md-button], [disabled][md-icon-button] { cursor: default; } [md-raised-button], [md-fab], [md-mini-fab] { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); background-color: #fafafa; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { color: white; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { color: rgba(255, 255, 255, 0.870588); } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { color: white; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { color: rgba(0, 0, 0, 0.38); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { background-color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { background-color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { background-color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [md-raised-button]:active, [md-fab]:active, [md-mini-fab]:active { box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); } .md-button-focus[md-raised-button], .md-button-focus[md-fab], .md-button-focus[md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } .md-button-focus.md-primary[md-raised-button], .md-button-focus.md-primary[md-fab], .md-button-focus.md-primary[md-mini-fab] { background-color: #00897b; } .md-button-focus.md-accent[md-raised-button], .md-button-focus.md-accent[md-fab], .md-button-focus.md-accent[md-mini-fab] { background-color: #8e24aa; } .md-button-focus.md-warn[md-raised-button], .md-button-focus.md-warn[md-fab], .md-button-focus.md-warn[md-mini-fab] { background-color: #e53935; } .md-button-focus.md-primary[disabled][md-raised-button], .md-button-focus.md-primary[disabled][md-fab], .md-button-focus.md-primary[disabled][md-mini-fab], .md-button-focus.md-accent[disabled][md-raised-button], .md-button-focus.md-accent[disabled][md-fab], .md-button-focus.md-accent[disabled][md-mini-fab], .md-button-focus.md-warn[disabled][md-raised-button], .md-button-focus.md-warn[disabled][md-fab], .md-button-focus.md-warn[disabled][md-mini-fab], .md-button-focus[disabled][disabled][md-raised-button], .md-button-focus[disabled][disabled][md-fab], .md-button-focus[disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab] { box-shadow: none; } [md-button]:hover, [md-button].md-button-focus { background-color: rgba(0, 0, 0, 0.12); } [md-button]:hover.md-primary, [md-button].md-button-focus.md-primary { background-color: rgba(0, 150, 136, 0.12); } [md-button]:hover.md-accent, [md-button].md-button-focus.md-accent { background-color: rgba(156, 39, 176, 0.12); } [md-button]:hover.md-warn, [md-button].md-button-focus.md-warn { background-color: rgba(244, 67, 54, 0.12); } [md-button]:hover.md-primary[disabled], [md-button]:hover.md-accent[disabled], [md-button]:hover.md-warn[disabled], [md-button]:hover[disabled][disabled], [md-button].md-button-focus.md-primary[disabled], [md-button].md-button-focus.md-accent[disabled], [md-button].md-button-focus.md-warn[disabled], [md-button].md-button-focus[disabled][disabled] { background-color: rgba(0, 0, 0, 0.12); } [md-button][disabled]:hover.md-primary, [md-button][disabled]:hover.md-accent, [md-button][disabled]:hover.md-warn, [md-button][disabled]:hover:hover { background-color: transparent; } [md-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 56px; height: 56px; padding: 0; } [md-fab] i, [md-fab] md-icon { padding: 16px 0; } [md-fab].md-button-focus { background-color: #8e24aa; } [md-mini-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 40px; height: 40px; padding: 0; } [md-mini-fab] i, [md-mini-fab] md-icon { padding: 8px 0; } [md-mini-fab].md-button-focus { background-color: #8e24aa; } [md-icon-button] { min-width: 0; padding: 0; width: 40px; height: 40px; line-height: 24px; border-radius: 50%; } [md-icon-button].md-button-focus { background-color: rgba(0, 0, 0, 0.12); } [md-icon-button].md-button-focus.md-primary { background-color: rgba(0, 150, 136, 0.12); } [md-icon-button].md-button-focus.md-accent { background-color: rgba(156, 39, 176, 0.12); } [md-icon-button].md-button-focus.md-warn { background-color: rgba(244, 67, 54, 0.12); } [md-icon-button].md-button-focus.md-primary[disabled], [md-icon-button].md-button-focus.md-accent[disabled], [md-icon-button].md-button-focus.md-warn[disabled], [md-icon-button].md-button-focus[disabled][disabled] { background-color: rgba(0, 0, 0, 0.12); } [md-icon-button] .md-button-wrapper > * { vertical-align: middle; } @media screen and (-ms-high-contrast: active) { .md-raised-button, .md-fab, .md-mini-fab { border: 1px solid #fff; } } "],
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], MdButton);
	    return MdButton;
	}());
	exports.MdButton = MdButton;
	var MdAnchor = (function (_super) {
	    __extends(MdAnchor, _super);
	    function MdAnchor(elementRef, renderer) {
	        _super.call(this, elementRef, renderer);
	        this._disabled = null;
	    }
	    Object.defineProperty(MdAnchor.prototype, "tabIndex", {
	        get: function () {
	            return this.disabled ? -1 : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
	        get: function () {
	            return this.disabled ? 'true' : 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdAnchor.prototype, "disabled", {
	        get: function () { return this._disabled; },
	        set: function (value) {
	            // The presence of *any* disabled value makes the component disabled, *except* for false.
	            this._disabled = (value != null && value != false) ? true : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    MdAnchor.prototype.haltDisabledEvents = function (event) {
	        // A disabled button shouldn't apply any actions
	        if (this.disabled) {
	            event.preventDefault();
	            event.stopImmediatePropagation();
	        }
	    };
	    __decorate([
	        core_1.HostBinding('tabIndex'), 
	        __metadata('design:type', Number)
	    ], MdAnchor.prototype, "tabIndex", null);
	    __decorate([
	        core_1.HostBinding('attr.aria-disabled'), 
	        __metadata('design:type', String)
	    ], MdAnchor.prototype, "isAriaDisabled", null);
	    __decorate([
	        core_1.HostBinding('attr.disabled'),
	        core_1.Input('disabled'), 
	        __metadata('design:type', Object)
	    ], MdAnchor.prototype, "disabled", null);
	    MdAnchor = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab]',
	            inputs: ['color'],
	            host: {
	                '[class.md-button-focus]': 'isKeyboardFocused',
	                '(mousedown)': 'setMousedown()',
	                '(focus)': 'setKeyboardFocus()',
	                '(blur)': 'removeKeyboardFocus()',
	                '(click)': 'haltDisabledEvents($event)',
	            },
	            template: "<span class=\"md-button-wrapper\"><ng-content></ng-content></span> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ [md-raised-button], [md-fab], [md-mini-fab], [md-button], [md-icon-button] { box-sizing: border-box; position: relative; background: transparent; text-align: center; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; outline: none; border: none; display: inline-block; white-space: nowrap; text-decoration: none; vertical-align: baseline; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; color: currentColor; margin: 0; min-width: 88px; line-height: 36px; padding: 0 16px; border-radius: 3px; } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab], .md-primary[md-button], .md-primary[md-icon-button] { color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab], .md-accent[md-button], .md-accent[md-icon-button] { color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab], .md-warn[md-button], .md-warn[md-icon-button] { color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-primary[disabled][md-button], .md-primary[disabled][md-icon-button], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-accent[disabled][md-button], .md-accent[disabled][md-icon-button], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], .md-warn[disabled][md-button], .md-warn[disabled][md-icon-button], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab], [disabled][disabled][md-button], [disabled][disabled][md-icon-button] { color: rgba(0, 0, 0, 0.38); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab], [disabled][md-button], [disabled][md-icon-button] { cursor: default; } [md-raised-button], [md-fab], [md-mini-fab] { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); background-color: #fafafa; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -webkit-transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { color: white; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { color: rgba(255, 255, 255, 0.870588); } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { color: white; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { color: rgba(0, 0, 0, 0.38); } .md-primary[md-raised-button], .md-primary[md-fab], .md-primary[md-mini-fab] { background-color: #009688; } .md-accent[md-raised-button], .md-accent[md-fab], .md-accent[md-mini-fab] { background-color: #9c27b0; } .md-warn[md-raised-button], .md-warn[md-fab], .md-warn[md-mini-fab] { background-color: #f44336; } .md-primary[disabled][md-raised-button], .md-primary[disabled][md-fab], .md-primary[disabled][md-mini-fab], .md-accent[disabled][md-raised-button], .md-accent[disabled][md-fab], .md-accent[disabled][md-mini-fab], .md-warn[disabled][md-raised-button], .md-warn[disabled][md-fab], .md-warn[disabled][md-mini-fab], [disabled][disabled][md-raised-button], [disabled][disabled][md-fab], [disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [md-raised-button]:active, [md-fab]:active, [md-mini-fab]:active { box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); } .md-button-focus[md-raised-button], .md-button-focus[md-fab], .md-button-focus[md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } .md-button-focus.md-primary[md-raised-button], .md-button-focus.md-primary[md-fab], .md-button-focus.md-primary[md-mini-fab] { background-color: #00897b; } .md-button-focus.md-accent[md-raised-button], .md-button-focus.md-accent[md-fab], .md-button-focus.md-accent[md-mini-fab] { background-color: #8e24aa; } .md-button-focus.md-warn[md-raised-button], .md-button-focus.md-warn[md-fab], .md-button-focus.md-warn[md-mini-fab] { background-color: #e53935; } .md-button-focus.md-primary[disabled][md-raised-button], .md-button-focus.md-primary[disabled][md-fab], .md-button-focus.md-primary[disabled][md-mini-fab], .md-button-focus.md-accent[disabled][md-raised-button], .md-button-focus.md-accent[disabled][md-fab], .md-button-focus.md-accent[disabled][md-mini-fab], .md-button-focus.md-warn[disabled][md-raised-button], .md-button-focus.md-warn[disabled][md-fab], .md-button-focus.md-warn[disabled][md-mini-fab], .md-button-focus[disabled][disabled][md-raised-button], .md-button-focus[disabled][disabled][md-fab], .md-button-focus[disabled][disabled][md-mini-fab] { background-color: rgba(0, 0, 0, 0.12); } [disabled][md-raised-button], [disabled][md-fab], [disabled][md-mini-fab] { box-shadow: none; } [md-button]:hover, [md-button].md-button-focus { background-color: rgba(0, 0, 0, 0.12); } [md-button]:hover.md-primary, [md-button].md-button-focus.md-primary { background-color: rgba(0, 150, 136, 0.12); } [md-button]:hover.md-accent, [md-button].md-button-focus.md-accent { background-color: rgba(156, 39, 176, 0.12); } [md-button]:hover.md-warn, [md-button].md-button-focus.md-warn { background-color: rgba(244, 67, 54, 0.12); } [md-button]:hover.md-primary[disabled], [md-button]:hover.md-accent[disabled], [md-button]:hover.md-warn[disabled], [md-button]:hover[disabled][disabled], [md-button].md-button-focus.md-primary[disabled], [md-button].md-button-focus.md-accent[disabled], [md-button].md-button-focus.md-warn[disabled], [md-button].md-button-focus[disabled][disabled] { background-color: rgba(0, 0, 0, 0.12); } [md-button][disabled]:hover.md-primary, [md-button][disabled]:hover.md-accent, [md-button][disabled]:hover.md-warn, [md-button][disabled]:hover:hover { background-color: transparent; } [md-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 56px; height: 56px; padding: 0; } [md-fab] i, [md-fab] md-icon { padding: 16px 0; } [md-fab].md-button-focus { background-color: #8e24aa; } [md-mini-fab] { min-width: 0; border-radius: 50%; background-color: #9c27b0; color: rgba(255, 255, 255, 0.870588); width: 40px; height: 40px; padding: 0; } [md-mini-fab] i, [md-mini-fab] md-icon { padding: 8px 0; } [md-mini-fab].md-button-focus { background-color: #8e24aa; } [md-icon-button] { min-width: 0; padding: 0; width: 40px; height: 40px; line-height: 24px; border-radius: 50%; } [md-icon-button].md-button-focus { background-color: rgba(0, 0, 0, 0.12); } [md-icon-button].md-button-focus.md-primary { background-color: rgba(0, 150, 136, 0.12); } [md-icon-button].md-button-focus.md-accent { background-color: rgba(156, 39, 176, 0.12); } [md-icon-button].md-button-focus.md-warn { background-color: rgba(244, 67, 54, 0.12); } [md-icon-button].md-button-focus.md-primary[disabled], [md-icon-button].md-button-focus.md-accent[disabled], [md-icon-button].md-button-focus.md-warn[disabled], [md-icon-button].md-button-focus[disabled][disabled] { background-color: rgba(0, 0, 0, 0.12); } [md-icon-button] .md-button-wrapper > * { vertical-align: middle; } @media screen and (-ms-high-contrast: active) { .md-raised-button, .md-fab, .md-mini-fab { border: 1px solid #fff; } } "],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], MdAnchor);
	    return MdAnchor;
	}(MdButton));
	exports.MdAnchor = MdAnchor;
	exports.MD_BUTTON_DIRECTIVES = [MdButton, MdAnchor];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/button/button.js.map

/***/ },
/* 397 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Annotation Factory that allows HTML style boolean attributes. For example,
	 * a field declared like this:

	 * @Directive({ selector: 'component' }) class MyComponent {
	 *   @Input() @BooleanFieldValueFactory() myField: boolean;
	 * }
	 *
	 * You could set it up this way:
	 *   <component myField>
	 * or:
	 *   <component myField="">
	 */
	function booleanFieldValueFactory() {
	    return function booleanFieldValueMetadata(target, key) {
	        var defaultValue = target[key];
	        var localKey = "__md_private_symbol_" + key;
	        target[localKey] = defaultValue;
	        Object.defineProperty(target, key, {
	            get: function () { return this[localKey]; },
	            set: function (value) {
	                this[localKey] = value != null && "" + value !== 'false';
	            }
	        });
	    };
	}
	exports.BooleanFieldValue = booleanFieldValueFactory;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/annotations/field-value.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(702);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/async/promise-completer.js.map

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * Directive to listen to changes of direction of part of the DOM.
	 *
	 * Applications should use this directive instead of the native attribute so that Material
	 * components can listen on changes of direction.
	 */
	var Dir = (function () {
	    function Dir() {
	        this._dir = 'ltr';
	        this.dirChange = new core_1.EventEmitter();
	    }
	    Object.defineProperty(Dir.prototype, "dir", {
	        get: function () {
	            return this._dir;
	        },
	        set: function (v) {
	            var old = this._dir;
	            this._dir = v;
	            if (old != this._dir) {
	                this.dirChange.emit(null);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Dir.prototype, "value", {
	        get: function () { return this.dir; },
	        set: function (v) { this.dir = v; },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input('dir'), 
	        __metadata('design:type', String)
	    ], Dir.prototype, "_dir", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Dir.prototype, "dirChange", void 0);
	    __decorate([
	        core_1.HostBinding('attr.dir'), 
	        __metadata('design:type', String)
	    ], Dir.prototype, "dir", null);
	    Dir = __decorate([
	        core_1.Directive({
	            selector: '[dir]',
	            // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
	            exportAs: '$implicit'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Dir);
	    return Dir;
	}());
	exports.Dir = Dir;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/rtl/dir.js.map

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var error_1 = __webpack_require__(151);
	var icon_registry_1 = __webpack_require__(332);
	var icon_registry_2 = __webpack_require__(332);
	exports.MdIconRegistry = icon_registry_2.MdIconRegistry;
	/** Exception thrown when an invalid icon name is passed to an md-icon component. */
	var MdIconInvalidNameError = (function (_super) {
	    __extends(MdIconInvalidNameError, _super);
	    function MdIconInvalidNameError(iconName) {
	        _super.call(this, "Invalid icon name: \"" + name + "\"");
	    }
	    return MdIconInvalidNameError;
	}(error_1.MdError));
	exports.MdIconInvalidNameError = MdIconInvalidNameError;
	/**
	 * Component to display an icon. It can be used in the following ways:
	 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
	 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
	 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
	 *   server must be configured to allow cross-domain requests.
	 *   Example:
	 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
	 *
	 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
	 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
	 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
	 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
	 *   Examples:
	 *     <md-icon svgIcon="left-arrow"></md-icon>
	 *     <md-icon svgIcon="animals:cat"></md-icon>
	 *
	 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
	 *   component. By default the Material icons font is used as described at
	 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
	 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
	 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
	 *   Examples:
	 *     <md-icon>home</md-icon>
	 *     <md-icon fontSet="myfont">sun</md-icon>
	 *
	 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
	 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
	 *   CSS class which causes the glyph to be displayed via a :before selector, as in
	 *   https://fortawesome.github.io/Font-Awesome/examples/
	 *   Example:
	 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
	 */
	var MdIcon = (function () {
	    function MdIcon(_element, _renderer, _mdIconRegistry) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._mdIconRegistry = _mdIconRegistry;
	        this.hostAriaLabel = '';
	    }
	    /**
	     * Splits an svgIcon binding value into its icon set and icon name components.
	     * Returns a 2-element array of [(icon set), (icon name)].
	     * The separator for the two fields is ':'. If there is no separator, an empty
	     * string is returned for the icon set and the entire value is returned for
	     * the icon name. If the argument is falsy, returns an array of two empty strings.
	     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
	     * Examples:
	     *   'social:cake' -> ['social', 'cake']
	     *   'penguin' -> ['', 'penguin']
	     *   null -> ['', '']
	     *   'a:b:c' -> (throws MdIconInvalidNameError)
	     */
	    MdIcon.prototype._splitIconName = function (iconName) {
	        if (!iconName) {
	            return ['', ''];
	        }
	        var parts = iconName.split(':');
	        switch (parts.length) {
	            case 1:
	                // Use default namespace.
	                return ['', parts[0]];
	            case 2:
	                return parts;
	            default:
	                throw new MdIconInvalidNameError(iconName);
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var changedInputs = Object.keys(changes);
	        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
	        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
	            if (this.svgIcon) {
	                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
	                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	            else if (this.svgSrc) {
	                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	        }
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	        this._updateAriaLabel();
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnInit = function () {
	        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
	        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngAfterViewChecked = function () {
	        // Update aria label here because it may depend on the projected text content.
	        // (e.g. <md-icon>home</md-icon> should use 'home').
	        this._updateAriaLabel();
	    };
	    MdIcon.prototype._updateAriaLabel = function () {
	        var ariaLabel = this._getAriaLabel();
	        if (ariaLabel) {
	            this._renderer.setElementAttribute(this._element.nativeElement, 'aria-label', ariaLabel);
	        }
	    };
	    MdIcon.prototype._getAriaLabel = function () {
	        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
	        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
	        // the text content of the directive.
	        var label = this.hostAriaLabel ||
	            this.alt ||
	            this.fontIcon ||
	            this._splitIconName(this.svgIcon)[1];
	        if (label) {
	            return label;
	        }
	        // The "content" of an SVG icon is not a useful label.
	        if (this._usingFontIcon()) {
	            var text = this._element.nativeElement.textContent;
	            if (text) {
	                return text;
	            }
	        }
	        // TODO: Warn here in dev mode.
	        return null;
	    };
	    MdIcon.prototype._usingFontIcon = function () {
	        return !(this.svgIcon || this.svgSrc);
	    };
	    MdIcon.prototype._setSvgElement = function (svg) {
	        var layoutElement = this._element.nativeElement;
	        // Remove existing child nodes and add the new SVG element.
	        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
	        // but it fails in IE11: https://github.com/angular/angular/issues/6327
	        layoutElement.innerHTML = '';
	        this._renderer.projectNodes(layoutElement, [svg]);
	    };
	    MdIcon.prototype._updateFontIconClasses = function () {
	        if (!this._usingFontIcon()) {
	            return;
	        }
	        var elem = this._element.nativeElement;
	        var fontSetClass = this.fontSet ?
	            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
	            this._mdIconRegistry.getDefaultFontSetClass();
	        if (fontSetClass != this._previousFontSetClass) {
	            if (this._previousFontSetClass) {
	                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
	            }
	            if (fontSetClass) {
	                this._renderer.setElementClass(elem, fontSetClass, true);
	            }
	            this._previousFontSetClass = fontSetClass;
	        }
	        if (this.fontIcon != this._previousFontIconClass) {
	            if (this._previousFontIconClass) {
	                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
	            }
	            if (this.fontIcon) {
	                this._renderer.setElementClass(elem, this.fontIcon, true);
	            }
	            this._previousFontIconClass = this.fontIcon;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgSrc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontSet", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "hostAriaLabel", void 0);
	    MdIcon = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            template: '<ng-content></ng-content>',
	            selector: 'md-icon',
	            styles: ["/** The width/height of the icon element. */ /** This works because we're using ViewEncapsulation.None. If we used the default encapsulation, the selector would need to be \":host\". */ md-icon { background-repeat: no-repeat; display: inline-block; fill: currentColor; height: 24px; width: 24px; } "],
	            host: {
	                'role': 'img',
	            },
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, icon_registry_1.MdIconRegistry])
	    ], MdIcon);
	    return MdIcon;
	}());
	exports.MdIcon = MdIcon;
	exports.MD_ICON_DIRECTIVES = [MdIcon];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/icon/icon.js.map

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var dir_1 = __webpack_require__(476);
	var promise_completer_1 = __webpack_require__(475);
	var error_1 = __webpack_require__(151);
	var field_value_1 = __webpack_require__(397);
	/** Exception thrown when two MdSidenav are matching the same side. */
	var MdDuplicatedSidenavError = (function (_super) {
	    __extends(MdDuplicatedSidenavError, _super);
	    function MdDuplicatedSidenavError(align) {
	        _super.call(this, "A sidenav was already declared for 'align=\"" + align + "\"'");
	    }
	    return MdDuplicatedSidenavError;
	}(error_1.MdError));
	exports.MdDuplicatedSidenavError = MdDuplicatedSidenavError;
	/**
	 * <md-sidenav> component.
	 *
	 * This component corresponds to the drawer of the sidenav.
	 *
	 * Please refer to README.md for examples on how to use it.
	 */
	var MdSidenav = (function () {
	    /**
	     * @param _elementRef The DOM element reference. Used for transition and width calculation.
	     *     If not available we do not hook on transitions.
	     */
	    function MdSidenav(_elementRef) {
	        this._elementRef = _elementRef;
	        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
	        this.align = 'start';
	        /** Mode of the sidenav; whether 'over' or 'side'. */
	        this.mode = 'over';
	        /** Whether the sidenav is opened. */
	        this._opened = false;
	        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
	        this.onOpenStart = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is fully opened. */
	        this.onOpen = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
	        this.onCloseStart = new core_1.EventEmitter();
	        /** Event emitted when the sidenav is fully closed. */
	        this.onClose = new core_1.EventEmitter();
	        this._transition = false;
	    }
	    Object.defineProperty(MdSidenav.prototype, "opened", {
	        /**
	         * Whether the sidenav is opened. We overload this because we trigger an event when it
	         * starts or end.
	         */
	        get: function () { return this._opened; },
	        set: function (v) {
	            this.toggle(v);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
	     * rejected if it didn't). */
	    MdSidenav.prototype.open = function () {
	        return this.toggle(true);
	    };
	    /**
	     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
	     * rejected if it didn't).
	     */
	    MdSidenav.prototype.close = function () {
	        return this.toggle(false);
	    };
	    /**
	     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
	     * close() when it's closed.
	     * @param isOpen
	     */
	    MdSidenav.prototype.toggle = function (isOpen) {
	        if (isOpen === void 0) { isOpen = !this.opened; }
	        // Shortcut it if we're already opened.
	        if (isOpen === this.opened) {
	            if (!this._transition) {
	                return Promise.resolve();
	            }
	            else {
	                return isOpen ? this._openPromise : this._closePromise;
	            }
	        }
	        this._opened = isOpen;
	        this._transition = true;
	        if (isOpen) {
	            this.onOpenStart.emit(null);
	        }
	        else {
	            this.onCloseStart.emit(null);
	        }
	        if (isOpen) {
	            if (this._openPromise == null) {
	                var completer = new promise_completer_1.PromiseCompleter();
	                this._openPromise = completer.promise;
	                this._openPromiseReject = completer.reject;
	                this._openPromiseResolve = completer.resolve;
	            }
	            return this._openPromise;
	        }
	        else {
	            if (this._closePromise == null) {
	                var completer = new promise_completer_1.PromiseCompleter();
	                this._closePromise = completer.promise;
	                this._closePromiseReject = completer.reject;
	                this._closePromiseResolve = completer.resolve;
	            }
	            return this._closePromise;
	        }
	    };
	    /**
	     * When transition has finished, set the internal state for classes and emit the proper event.
	     * The event passed is actually of type TransitionEvent, but that type is not available in
	     * Android so we use any.
	     * @internal
	     */
	    MdSidenav.prototype.onTransitionEnd = function (transitionEvent) {
	        if (transitionEvent.target == this._elementRef.nativeElement
	            && transitionEvent.propertyName.endsWith('transform')) {
	            this._transition = false;
	            if (this._opened) {
	                if (this._openPromise != null) {
	                    this._openPromiseResolve();
	                }
	                if (this._closePromise != null) {
	                    this._closePromiseReject();
	                }
	                this.onOpen.emit(null);
	            }
	            else {
	                if (this._closePromise != null) {
	                    this._closePromiseResolve();
	                }
	                if (this._openPromise != null) {
	                    this._openPromiseReject();
	                }
	                this.onClose.emit(null);
	            }
	            this._openPromise = null;
	            this._closePromise = null;
	        }
	    };
	    Object.defineProperty(MdSidenav.prototype, "_isClosing", {
	        get: function () {
	            return !this._opened && this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isOpening", {
	        get: function () {
	            return this._opened && this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isClosed", {
	        get: function () {
	            return !this._opened && !this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isOpened", {
	        get: function () {
	            return this._opened && !this._transition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_isEnd", {
	        get: function () {
	            return this.align == 'end';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modeSide", {
	        get: function () {
	            return this.mode == 'side';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modeOver", {
	        get: function () {
	            return this.mode == 'over';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "_modePush", {
	        get: function () {
	            return this.mode == 'push';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenav.prototype, "width", {
	        /**
	         * This is public because we need it from MdSidenavLayout, but it's undocumented and should
	         * not be used outside.
	         * @internal
	         */
	        get: function () {
	            if (this._elementRef.nativeElement) {
	                return this._elementRef.nativeElement.offsetWidth;
	            }
	            return 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "align", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "mode", void 0);
	    __decorate([
	        core_1.Input('opened'),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdSidenav.prototype, "_opened", void 0);
	    __decorate([
	        core_1.Output('open-start'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onOpenStart", void 0);
	    __decorate([
	        core_1.Output('open'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onOpen", void 0);
	    __decorate([
	        core_1.Output('close-start'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onCloseStart", void 0);
	    __decorate([
	        core_1.Output('close'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "onClose", void 0);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-closing'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isClosing", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-opening'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isOpening", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-closed'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isClosed", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-opened'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isOpened", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-end'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_isEnd", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-side'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modeSide", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-over'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modeOver", null);
	    __decorate([
	        core_1.HostBinding('class.md-sidenav-push'), 
	        __metadata('design:type', Object)
	    ], MdSidenav.prototype, "_modePush", null);
	    MdSidenav = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-sidenav',
	            template: '<ng-content></ng-content>',
	            host: {
	                '(transitionend)': 'onTransitionEnd($event)',
	            },
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], MdSidenav);
	    return MdSidenav;
	}());
	exports.MdSidenav = MdSidenav;
	/**
	 * <md-sidenav-layout> component.
	 *
	 * This is the parent component to one or two <md-sidenav>s that validates the state internally
	 * and coordinate the backdrop and content styling.
	 */
	var MdSidenavLayout = (function () {
	    function MdSidenavLayout(_dir, _element, _renderer) {
	        var _this = this;
	        this._dir = _dir;
	        this._element = _element;
	        this._renderer = _renderer;
	        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
	        // properties to point to the proper start/end.
	        if (_dir != null) {
	            _dir.dirChange.subscribe(function () { return _this._validateDrawers(); });
	        }
	    }
	    Object.defineProperty(MdSidenavLayout.prototype, "start", {
	        get: function () { return this._start; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdSidenavLayout.prototype, "end", {
	        get: function () { return this._end; },
	        enumerable: true,
	        configurable: true
	    });
	    /** TODO: internal */
	    MdSidenavLayout.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        // On changes, assert on consistency.
	        this._sidenavs.changes.subscribe(function () { return _this._validateDrawers(); });
	        this._sidenavs.forEach(function (sidenav) { return _this._watchSidenavToggle(sidenav); });
	        this._validateDrawers();
	    };
	    /*
	    * Subscribes to sidenav events in order to set a class on the main layout element when the sidenav
	    * is open and the backdrop is visible. This ensures any overflow on the layout element is properly
	    * hidden.
	    * @internal
	    */
	    MdSidenavLayout.prototype._watchSidenavToggle = function (sidenav) {
	        var _this = this;
	        if (!sidenav || sidenav.mode === 'side') {
	            return;
	        }
	        sidenav.onOpen.subscribe(function () { return _this._setLayoutClass(sidenav, true); });
	        sidenav.onClose.subscribe(function () { return _this._setLayoutClass(sidenav, false); });
	    };
	    /* Toggles the 'md-sidenav-opened' class on the main 'md-sidenav-layout' element. */
	    MdSidenavLayout.prototype._setLayoutClass = function (sidenav, bool) {
	        this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
	    };
	    /** Validate the state of the sidenav children components. */
	    MdSidenavLayout.prototype._validateDrawers = function () {
	        var _this = this;
	        this._start = this._end = null;
	        // Ensure that we have at most one start and one end sidenav.
	        this._sidenavs.forEach(function (sidenav) {
	            if (sidenav.align == 'end') {
	                if (_this._end != null) {
	                    throw new MdDuplicatedSidenavError('end');
	                }
	                _this._end = sidenav;
	            }
	            else {
	                if (_this._start != null) {
	                    throw new MdDuplicatedSidenavError('start');
	                }
	                _this._start = sidenav;
	            }
	        });
	        this._right = this._left = null;
	        // Detect if we're LTR or RTL.
	        if (this._dir == null || this._dir.value == 'ltr') {
	            this._left = this._start;
	            this._right = this._end;
	        }
	        else {
	            this._left = this._end;
	            this._right = this._start;
	        }
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.closeModalSidenav = function () {
	        if (this._start != null && this._start.mode != 'side') {
	            this._start.close();
	        }
	        if (this._end != null && this._end.mode != 'side') {
	            this._end.close();
	        }
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.isShowingBackdrop = function () {
	        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
	            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
	    };
	    MdSidenavLayout.prototype._isSidenavOpen = function (side) {
	        return side != null && side.opened;
	    };
	    /**
	     * Return the width of the sidenav, if it's in the proper mode and opened.
	     * This may relayout the view, so do not call this often.
	     * @param sidenav
	     * @param mode
	     */
	    MdSidenavLayout.prototype._getSidenavEffectiveWidth = function (sidenav, mode) {
	        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav.width : 0;
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getMarginLeft = function () {
	        return this._getSidenavEffectiveWidth(this._left, 'side');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getMarginRight = function () {
	        return this._getSidenavEffectiveWidth(this._right, 'side');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getPositionLeft = function () {
	        return this._getSidenavEffectiveWidth(this._left, 'push');
	    };
	    /** @internal */
	    MdSidenavLayout.prototype.getPositionRight = function () {
	        return this._getSidenavEffectiveWidth(this._right, 'push');
	    };
	    /**
	     * Returns the horizontal offset for the content area.  There should never be a value for both
	     * left and right, so by subtracting the right value from the left value, we should always get
	     * the appropriate offset.
	     * @internal
	     */
	    MdSidenavLayout.prototype.getPositionOffset = function () {
	        return this.getPositionLeft() - this.getPositionRight();
	    };
	    /**
	     * This is using [ngStyle] rather than separate [style...] properties because [style.transform]
	     * doesn't seem to work right now.
	     * @internal
	     */
	    MdSidenavLayout.prototype.getStyles = function () {
	        return {
	            marginLeft: this.getMarginLeft() + "px",
	            marginRight: this.getMarginRight() + "px",
	            transform: "translate3d(" + this.getPositionOffset() + "px, 0, 0)"
	        };
	    };
	    __decorate([
	        core_1.ContentChildren(MdSidenav), 
	        __metadata('design:type', core_1.QueryList)
	    ], MdSidenavLayout.prototype, "_sidenavs", void 0);
	    MdSidenavLayout = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-sidenav-layout',
	            // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
	            // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
	            // changes its state.
	            directives: [MdSidenav],
	            template: "<div class=\"md-sidenav-backdrop\" (click)=\"closeModalSidenav()\" [class.md-sidenav-shown]=\"isShowingBackdrop()\"></div> <ng-content select=\"md-sidenav\"></ng-content> <md-content [ngStyle]=\"getStyles()\"> <ng-content></ng-content> </md-content> ",
	            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ /** * This mixin hides an element visually. * That means it's still accessible for screen-readers but not visible in view. */ /** * Forces an element to grow to fit floated contents; used as as an alternative to * `overflow: hidden;` because it doesn't cut off contents. */ /** * A mixin, which generates temporary ink ripple on a given component. * When $bindToParent is set to true, it will check for the focused class on the same selector as you included * that mixin. * It is also possible to specify the color palette of the temporary ripple. By default it uses the * accent palette for its background. */ /** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ /** * Mixin to help with defining LTR/RTL 'transform: translate3d()' values. * @param $open The translation value when the sidenav is opened. * @param $close The translation value when the sidenav is closed. */ /* This mixin ensures a sidenav element spans the whole viewport.*/ :host { position: relative; -webkit-transform: translate3D(0, 0, 0); transform: translate3D(0, 0, 0); box-sizing: border-box; overflow-y: auto; -webkit-overflow-scrolling: touch; display: block; overflow-x: hidden; } :host[fullscreen] { position: absolute; top: 0; left: 0; right: 0; bottom: 0; } :host[fullscreen].md-sidenav-opened { overflow: hidden; } :host > .md-sidenav-backdrop { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: block; z-index: 2; visibility: hidden; } :host > .md-sidenav-backdrop.md-sidenav-shown { visibility: visible; background-color: rgba(0, 0, 0, 0.6); } :host > md-content { position: relative; -webkit-transform: translate3D(0, 0, 0); transform: translate3D(0, 0, 0); display: block; } :host > md-sidenav { position: relative; -webkit-transform: translate3D(0, 0, 0); transform: translate3D(0, 0, 0); display: block; position: fixed; top: 0; bottom: 0; z-index: 3; min-width: 5%; overflow-y: auto; background-color: white; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } :host > md-sidenav.md-sidenav-closed { visibility: hidden; } :host > md-sidenav.md-sidenav-closing { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host > md-sidenav.md-sidenav-push { background-color: white; } :host > md-sidenav.md-sidenav-side { z-index: 1; } :host > md-sidenav.md-sidenav-end { right: 0; -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); } :host > md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } :host > md-sidenav.md-sidenav-end.md-sidenav-closing { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host > md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host-context([dir=\"rtl\"]) > md-sidenav { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-closed { visibility: hidden; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-closing { -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0); will-change: transform; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-end { left: 0; right: auto; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-end.md-sidenav-closed { visibility: hidden; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-end.md-sidenav-closing { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); will-change: transform; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-end.md-sidenav-opening { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); visibility: visible; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); will-change: transform; } :host-context([dir=\"rtl\"]) > md-sidenav.md-sidenav-end.md-sidenav-opened { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } ",
	"/** * We separate transitions to be able to disable them in unit tests, by simply not loading this file. */ :host > .md-sidenav-backdrop.md-sidenav-shown { -webkit-transition: background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } :host > md-content { -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } :host > md-sidenav { -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } "],
	        }),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [dir_1.Dir, core_1.ElementRef, core_1.Renderer])
	    ], MdSidenavLayout);
	    return MdSidenavLayout;
	}());
	exports.MdSidenavLayout = MdSidenavLayout;
	exports.MD_SIDENAV_DIRECTIVES = [MdSidenavLayout, MdSidenav];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/sidenav/sidenav.js.map

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	var core_3 = __webpack_require__(1);
	var MdToolbar = (function () {
	    function MdToolbar(elementRef, renderer) {
	        this.elementRef = elementRef;
	        this.renderer = renderer;
	    }
	    Object.defineProperty(MdToolbar.prototype, "color", {
	        get: function () {
	            return this._color;
	        },
	        set: function (value) {
	            this._updateColor(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MdToolbar.prototype._updateColor = function (newColor) {
	        this._setElementColor(this._color, false);
	        this._setElementColor(newColor, true);
	        this._color = newColor;
	    };
	    MdToolbar.prototype._setElementColor = function (color, isAdd) {
	        if (color != null && color != '') {
	            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdToolbar.prototype, "color", null);
	    MdToolbar = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-toolbar',
	            template: "<div class=\"md-toolbar-layout\"> <md-toolbar-row> <ng-content></ng-content> </md-toolbar-row> <ng-content select=\"md-toolbar-row\"></ng-content> </div>",
	            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ /** * This mixin hides an element visually. * That means it's still accessible for screen-readers but not visible in view. */ /** * Forces an element to grow to fit floated contents; used as as an alternative to * `overflow: hidden;` because it doesn't cut off contents. */ /** * A mixin, which generates temporary ink ripple on a given component. * When $bindToParent is set to true, it will check for the focused class on the same selector as you included * that mixin. * It is also possible to specify the color palette of the temporary ripple. By default it uses the * accent palette for its background. */ :host { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; width: 100%; min-height: 64px; font-size: 20px; font-weight: 400; font-family: Roboto, \"Helvetica Neue\", sans-serif; padding: 0 16px; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background: whitesmoke; color: rgba(0, 0, 0, 0.87); } :host.md-primary { background: #009688; color: white; } :host.md-accent { background: #9c27b0; color: rgba(255, 255, 255, 0.870588); } :host.md-warn { background: #f44336; color: white; } :host md-toolbar-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; width: 100%; height: 64px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; } "],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_3.ElementRef, core_2.Renderer])
	    ], MdToolbar);
	    return MdToolbar;
	}());
	exports.MdToolbar = MdToolbar;
	exports.MD_TOOLBAR_DIRECTIVES = [MdToolbar];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/toolbar/toolbar.js.map

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var enterZone_1 = __webpack_require__(481);
	Observable_1.Observable.prototype.enterZone = enterZone_1.enterZone;
	//# sourceMappingURL=enterZone.js.map

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	function enterZone(zone) {
	    return this.lift(new EnterZoneOperator(zone));
	}
	exports.enterZone = enterZone;
	var EnterZoneOperator = (function () {
	    function EnterZoneOperator(_zone) {
	        this._zone = _zone;
	    }
	    EnterZoneOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new EnterZoneSubscriber(subscriber, this._zone));
	    };
	    return EnterZoneOperator;
	}());
	exports.EnterZoneOperator = EnterZoneOperator;
	var EnterZoneSubscriber = (function (_super) {
	    __extends(EnterZoneSubscriber, _super);
	    function EnterZoneSubscriber(destination, _zone) {
	        _super.call(this, destination);
	        this._zone = _zone;
	    }
	    EnterZoneSubscriber.prototype._next = function (value) {
	        var _this = this;
	        this._zone.run(function () { return _this.destination.next(value); });
	    };
	    return EnterZoneSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=enterZone.js.map

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var Observable_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(36);
	var core_1 = __webpack_require__(1);
	__webpack_require__(103);
	__webpack_require__(33);
	__webpack_require__(236);
	__webpack_require__(384);
	__webpack_require__(381);
	var IDB_SUCCESS = 'success';
	var IDB_COMPLETE = 'complete';
	var IDB_ERROR = 'error';
	var IDB_UPGRADE_NEEDED = 'upgradeneeded';
	var IDB_TXN_READ = 'readonly';
	var IDB_TXN_READWRITE = 'readwrite';
	exports.DB_INSERT = 'DB_INSERT';
	exports.DatabaseBackend = new core_1.OpaqueToken('IndexedDBBackend');
	exports.IDB_SCHEMA = new core_1.OpaqueToken('IDB_SCHEMA');
	exports.getIDBFactory = function () { return window.indexedDB || self.indexedDB; };
	var Database = (function () {
	    function Database(idbBackend, schema) {
	        this.changes = new Subject_1.Subject();
	        this._schema = schema;
	        this._idb = idbBackend;
	    }
	    Database.prototype._mapRecord = function (objectSchema) {
	        return function (dbResponseRec) {
	            if (!objectSchema.primaryKey) {
	                dbResponseRec.record['$key'] = dbResponseRec['$key'];
	            }
	            return dbResponseRec.record;
	        };
	    };
	    Database.prototype._upgradeDB = function (observer, db) {
	        for (var storeName in this._schema.stores) {
	            if (db.objectStoreNames.contains(storeName)) {
	                db.deleteObjectStore(storeName);
	            }
	            this._createObjectStore(db, storeName, this._schema.stores[storeName]);
	        }
	        observer.next(db);
	        observer.complete();
	    };
	    Database.prototype._createObjectStore = function (db, key, schema) {
	        var objectStore = db.createObjectStore(key, { autoIncrement: true, keyPath: schema.primaryKey });
	    };
	    Database.prototype.open = function (dbName, version, upgradeHandler) {
	        var _this = this;
	        if (version === void 0) { version = 1; }
	        var idb = this._idb;
	        return Observable_1.Observable.create(function (observer) {
	            var openReq = idb.open(dbName, _this._schema.version);
	            var onSuccess = function (event) {
	                observer.next(event.target.result);
	                observer.complete();
	            };
	            var onError = function (err) {
	                console.log(err);
	                observer.error(err);
	            };
	            var onUpgradeNeeded = function (event) {
	                _this._upgradeDB(observer, event.target.result);
	            };
	            openReq.addEventListener(IDB_SUCCESS, onSuccess);
	            openReq.addEventListener(IDB_ERROR, onError);
	            openReq.addEventListener(IDB_UPGRADE_NEEDED, onUpgradeNeeded);
	            return function () {
	                openReq.removeEventListener(IDB_SUCCESS, onSuccess);
	                openReq.removeEventListener(IDB_ERROR, onError);
	                openReq.removeEventListener(IDB_UPGRADE_NEEDED, onUpgradeNeeded);
	            };
	        });
	    };
	    Database.prototype.deleteDatabase = function (dbName) {
	        var _this = this;
	        return new Observable_1.Observable(function (deletionObserver) {
	            var deleteRequest = _this._idb.deleteDatabase(dbName);
	            var onSuccess = function (event) {
	                deletionObserver.next(null);
	                deletionObserver.complete();
	            };
	            var onError = function (err) { return deletionObserver.error(err); };
	            deleteRequest.addEventListener(IDB_SUCCESS, onSuccess);
	            deleteRequest.addEventListener(IDB_ERROR, onError);
	            return function () {
	                deleteRequest.removeEventListener(IDB_SUCCESS, onSuccess);
	                deleteRequest.removeEventListener(IDB_ERROR, onError);
	            };
	        });
	    };
	    Database.prototype.insert = function (storeName, records, notify) {
	        var _this = this;
	        if (notify === void 0) { notify = true; }
	        return this.executeWrite(storeName, 'put', records)
	            .do(function (payload) { return notify ? _this.changes.next({ type: exports.DB_INSERT, payload: payload }) : ({}); });
	    };
	    Database.prototype.get = function (storeName, key) {
	        var _this = this;
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var recordSchema = _this._schema.stores[storeName];
	                var mapper = _this._mapRecord(recordSchema);
	                var txn = db.transaction([storeName], IDB_TXN_READ);
	                var objectStore = txn.objectStore(storeName);
	                var getRequest = objectStore.get(key);
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onTxnComplete = function () { return txnObserver.complete(); };
	                var onRecordFound = function (ev) { return txnObserver.next(getRequest.result); };
	                txn.addEventListener(IDB_COMPLETE, onTxnComplete);
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                getRequest.addEventListener(IDB_SUCCESS, onRecordFound);
	                getRequest.addEventListener(IDB_ERROR, onTxnError);
	                return function () {
	                    getRequest.removeEventListener(IDB_SUCCESS, onRecordFound);
	                    getRequest.removeEventListener(IDB_ERROR, onTxnError);
	                    txn.removeEventListener(IDB_COMPLETE, onTxnComplete);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.query = function (storeName, predicate) {
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var txn = db.transaction([storeName], IDB_TXN_READ);
	                var objectStore = txn.objectStore(storeName);
	                var getRequest = objectStore.openCursor();
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onRecordFound = function (ev) {
	                    var cursor = ev.target.result;
	                    if (cursor) {
	                        if (predicate) {
	                            var match = predicate(cursor.value);
	                            if (match) {
	                                txnObserver.next(cursor.value);
	                            }
	                        }
	                        else {
	                            txnObserver.next(cursor.value);
	                        }
	                        cursor.continue();
	                    }
	                    else {
	                        txnObserver.complete();
	                    }
	                };
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                getRequest.addEventListener(IDB_SUCCESS, onRecordFound);
	                getRequest.addEventListener(IDB_ERROR, onTxnError);
	                return function () {
	                    getRequest.removeEventListener(IDB_SUCCESS, onRecordFound);
	                    getRequest.removeEventListener(IDB_ERROR, onTxnError);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.executeWrite = function (storeName, actionType, records) {
	        var _this = this;
	        var changes = this.changes;
	        return this.open(this._schema.name)
	            .mergeMap(function (db) {
	            return new Observable_1.Observable(function (txnObserver) {
	                var recordSchema = _this._schema.stores[storeName];
	                var mapper = _this._mapRecord(recordSchema);
	                var txn = db.transaction([storeName], IDB_TXN_READWRITE);
	                var objectStore = txn.objectStore(storeName);
	                var onTxnError = function (err) { return txnObserver.error(err); };
	                var onTxnComplete = function () { return txnObserver.complete(); };
	                txn.addEventListener(IDB_COMPLETE, onTxnComplete);
	                txn.addEventListener(IDB_ERROR, onTxnError);
	                var makeRequest = function (record) {
	                    return new Observable_1.Observable(function (reqObserver) {
	                        var req;
	                        if (recordSchema.primaryKey) {
	                            req = objectStore[actionType](record);
	                        }
	                        else {
	                            var $key = record['$key'];
	                            var $record = Object.assign({}, record);
	                            delete $record.key;
	                            req = objectStore[actionType]($record, $key);
	                        }
	                        req.addEventListener(IDB_SUCCESS, function () {
	                            var $key = req.result;
	                            reqObserver.next(mapper({ $key: $key, record: record }));
	                        });
	                        req.addEventListener(IDB_ERROR, function (err) {
	                            reqObserver.error(err);
	                        });
	                    });
	                };
	                var requestSubscriber = Observable_1.Observable.from(records)
	                    .mergeMap(makeRequest)
	                    .subscribe(txnObserver);
	                return function () {
	                    requestSubscriber.unsubscribe();
	                    txn.removeEventListener(IDB_COMPLETE, onTxnComplete);
	                    txn.removeEventListener(IDB_ERROR, onTxnError);
	                };
	            });
	        });
	    };
	    Database.prototype.compare = function (a, b) {
	        return this._idb.cmp(a, b);
	    };
	    Database = __decorate([
	        __param(0, core_1.Inject(exports.DatabaseBackend)),
	        __param(1, core_1.Inject(exports.IDB_SCHEMA)), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], Database);
	    return Database;
	}());
	exports.Database = Database;
	exports.DB_PROVIDERS = [
	    core_1.provide(exports.DatabaseBackend, { useFactory: exports.getIDBFactory }),
	    Database
	];
	exports.provideDB = function (schema) {
	    return exports.DB_PROVIDERS.concat([core_1.provide(exports.IDB_SCHEMA, { useValue: schema })]);
	};


/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var util_1 = __webpack_require__(206);
	var effects_1 = __webpack_require__(336);
	var state_updates_1 = __webpack_require__(339);
	function runEffects() {
	    var effects = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        effects[_i - 0] = arguments[_i];
	    }
	    var allEffects = util_1.flatten(effects)
	        .map(function (effect) { return new core_1.Provider(effects_1.BOOTSTRAP_EFFECTS, {
	        useClass: effect,
	        multi: true
	    }); });
	    return allEffects.concat([
	        effects_1.CONNECT_EFFECTS_PROVIDER,
	        state_updates_1.STATE_UPDATES_PROVIDER
	    ]);
	}
	exports.runEffects = runEffects;


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(87);
	__webpack_require__(33);
	var actions_1 = __webpack_require__(207);
	function projectLocationChanges(state$) {
	    return state$.map(function (s) { return s.router; }).filter(function (change) { return change !== null; });
	}
	exports.projectLocationChanges = projectLocationChanges;
	function listenForRouterMethodActions(router, actions$) {
	    actions$
	        .filter(function (action) { return actions_1.routerActionTypes.indexOf(action.type) > -1; })
	        .subscribe(function (action) {
	        var _a = action.payload, path = _a.path, query = _a.query;
	        switch (action.type) {
	            case actions_1.routerActions.GO:
	                router.go(path, query);
	                break;
	            case actions_1.routerActions.REPLACE:
	                router.replace(path, query);
	                break;
	            case actions_1.routerActions.SEARCH:
	                router.search(query);
	                break;
	            case actions_1.routerActions.BACK:
	                router.back();
	                break;
	            case actions_1.routerActions.FORWARD:
	                router.forward();
	                break;
	        }
	    });
	}
	exports.listenForRouterMethodActions = listenForRouterMethodActions;
	function connectRouterActions(router, store) {
	    router
	        .map(function (change) { return ({ type: actions_1.routerActions.UPDATE_LOCATION, payload: change }); })
	        .subscribe(store);
	}
	exports.connectRouterActions = connectRouterActions;
	//# sourceMappingURL=connect.js.map

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(245);
	var store_1 = __webpack_require__(69);
	var connect_1 = __webpack_require__(484);
	exports.LOCATION_CHANGES_PROVIDER = new core_1.Provider(router_1.LOCATION_CHANGES, {
	    deps: [router_1.Router, store_1.Dispatcher, store_1.Store],
	    useFactory: function (router, dispatcher, store) {
	        connect_1.listenForRouterMethodActions(router, dispatcher);
	        connect_1.connectRouterActions(router, store);
	        return connect_1.projectLocationChanges(store);
	    }
	});
	//# sourceMappingURL=location-changes.js.map

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1 = __webpack_require__(207);
	function routerReducer(state, action) {
	    if (state === void 0) { state = null; }
	    switch (action.type) {
	        case actions_1.routerActions.UPDATE_LOCATION:
	            return action.payload;
	        default:
	            return state;
	    }
	}
	exports.routerReducer = routerReducer;
	//# sourceMappingURL=reducer.js.map

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Guards are services that can protect routes from being traversed. They
	 * are implemented using traversal hooks
	 *
	 * A guard's `protectRoute` method is called when the router begins traversing a
	 * route configuration file. It returns `true` or `false` to let the router know
	 * if it should consider the route a candidate. Using guards, you can auth
	 * protect routes, run data fetching, etc.
	 *
	 * A limitation of guards is that they must be provided in the same place you
	 * provide the router.
	 */
	__webpack_require__(382);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(665);
	__webpack_require__(383);
	var async_1 = __webpack_require__(398);
	var Observable_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(1);
	var route_traverser_1 = __webpack_require__(132);
	var GuardHook = (function () {
	    function GuardHook(_injector) {
	        this._injector = _injector;
	    }
	    GuardHook.prototype.resolveGuard = function (token) {
	        var guard = this._injector.get(token, null);
	        if (guard === null) {
	            guard = this._injector.resolveAndInstantiate(token);
	        }
	        return guard;
	    };
	    GuardHook.prototype.apply = function (route$) {
	        var _this = this;
	        return route$.mergeMap(function (candidate) {
	            var route = candidate.route;
	            if (!!route.guards && Array.isArray(route.guards) && route.guards.length > 0) {
	                var guards = route.guards.map(function (token) { return _this.resolveGuard(token); });
	                var activated = guards.map(function (guard) { return guard.protectRoute(candidate); });
	                return Observable_1.Observable.merge.apply(Observable_1.Observable, activated)
	                    .observeOn(async_1.async)
	                    .every(function (value) { return !!value; })
	                    .map(function (passed) {
	                    if (passed) {
	                        return candidate;
	                    }
	                    return Object.assign({}, candidate, { route: null });
	                });
	            }
	            return Observable_1.Observable.of(candidate);
	        });
	    };
	    GuardHook = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(core_1.Injector)), 
	        __metadata('design:paramtypes', [core_1.ReflectiveInjector])
	    ], GuardHook);
	    return GuardHook;
	}());
	exports.GuardHook = GuardHook;
	exports.GUARD_PROVIDERS = [
	    new core_1.Provider(route_traverser_1.TRAVERSAL_HOOKS, { useClass: GuardHook, multi: true })
	];
	//# sourceMappingURL=guard.js.map

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Redirection happens in middleware. This is a fork of react-router's
	 * Redirect component
	 */
	__webpack_require__(87);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(78);
	var router_instruction_1 = __webpack_require__(97);
	var match_pattern_1 = __webpack_require__(342);
	var RedirectHook = (function () {
	    function RedirectHook(router) {
	        this.router = router;
	    }
	    RedirectHook.prototype.apply = function (next$) {
	        var _this = this;
	        return next$
	            .filter(function (next) {
	            var last = next.routes[next.routes.length - 1];
	            if (last.redirectTo) {
	                _this._handleRedirect(last, next);
	                return false;
	            }
	            return true;
	        });
	    };
	    RedirectHook.prototype._handleRedirect = function (route, next) {
	        var routeParams = next.routeParams, queryParams = next.queryParams;
	        var pathname;
	        if (route.redirectTo.charAt(0) === '/') {
	            pathname = match_pattern_1.formatPattern(route.redirectTo, routeParams);
	        }
	        else {
	            var routeIndex = next.routes.indexOf(route);
	            var parentPattern = this._getRoutePattern(next.routes, routeIndex - 1);
	            var pattern = parentPattern.replace(/\/*$/, '/') + route.redirectTo;
	            pathname = match_pattern_1.formatPattern(pattern, routeParams);
	        }
	        this.router.replace(pathname, queryParams);
	    };
	    RedirectHook.prototype._getRoutePattern = function (routes, routeIndex) {
	        var parentPattern = '';
	        for (var i = routeIndex; i >= 0; i--) {
	            var route = routes[i];
	            var pattern = route.path || '';
	            parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	        }
	        return parentPattern;
	    };
	    RedirectHook = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], RedirectHook);
	    return RedirectHook;
	}());
	exports.RedirectHook = RedirectHook;
	exports.REDIRECT_PROVIDERS = [
	    new core_1.Provider(router_instruction_1.INSTRUCTION_HOOKS, { useClass: RedirectHook })
	];
	//# sourceMappingURL=redirect.js.map

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var reducer_1 = __webpack_require__(346);
	var dispatcher_1 = __webpack_require__(345);
	var store_1 = __webpack_require__(348);
	var state_1 = __webpack_require__(347);
	var utils_1 = __webpack_require__(349);
	exports.INITIAL_REDUCER = new core_1.OpaqueToken('ngrx/store/reducer');
	exports.INITIAL_STATE = new core_1.OpaqueToken('ngrx/store/initial-state');
	var dispatcherProvider = core_1.provide(dispatcher_1.Dispatcher, {
	    useFactory: function () {
	        return new dispatcher_1.Dispatcher();
	    }
	});
	var storeProvider = core_1.provide(store_1.Store, {
	    deps: [dispatcher_1.Dispatcher, reducer_1.Reducer, state_1.State, exports.INITIAL_STATE],
	    useFactory: function (dispatcher, reducer, state$, initialState) {
	        return new store_1.Store(dispatcher, reducer, state$, initialState);
	    }
	});
	var stateProvider = core_1.provide(state_1.State, {
	    deps: [exports.INITIAL_STATE, dispatcher_1.Dispatcher, reducer_1.Reducer],
	    useFactory: function (initialState, dispatcher, reducer) {
	        return new state_1.State(initialState, dispatcher, reducer);
	    }
	});
	var reducerProvider = core_1.provide(reducer_1.Reducer, {
	    deps: [dispatcher_1.Dispatcher, exports.INITIAL_REDUCER],
	    useFactory: function (dispatcher, reducer) {
	        return new reducer_1.Reducer(dispatcher, reducer);
	    }
	});
	function provideStore(reducer, initialState) {
	    return [
	        core_1.provide(exports.INITIAL_REDUCER, {
	            useFactory: function () {
	                if (typeof reducer === 'function') {
	                    return reducer;
	                }
	                return utils_1.combineReducers(reducer);
	            }
	        }),
	        core_1.provide(exports.INITIAL_STATE, {
	            deps: [exports.INITIAL_REDUCER],
	            useFactory: function (reducer) {
	                if (initialState === undefined) {
	                    return reducer(undefined, { type: dispatcher_1.Dispatcher.INIT });
	                }
	                return initialState;
	            }
	        }),
	        dispatcherProvider,
	        storeProvider,
	        stateProvider,
	        reducerProvider
	    ];
	}
	exports.provideStore = provideStore;


/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var button_1 = __webpack_require__(396);
	var toolbar_1 = __webpack_require__(479);
	var sidenav_1 = __webpack_require__(478);
	var icon_1 = __webpack_require__(477);
	var list_1 = __webpack_require__(395);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [
	                button_1.MdAnchor,
	                button_1.MdButton,
	                toolbar_1.MdToolbar,
	                sidenav_1.MD_SIDENAV_DIRECTIVES,
	                icon_1.MdIcon,
	                list_1.MD_LIST_DIRECTIVES
	            ],
	            providers: [icon_1.MdIconRegistry],
	            styles: ["\n    * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    .secondary {\n      color: rgba(0, 0, 0, .54);\n    }\n\n    md-sidenav-layout {\n      background: rgba(0, 0, 0, .03);\n    }\n\n    md-sidenav {\n      width: 300px;\n    }\n  "],
	            template: "\n    <md-sidenav-layout fullscreen>\n      <md-sidenav #sidenav>\n        <md-nav-list>\n          <a md-list-item linkTo=\"/\" (click)=\"sidenav.close()\">\n            <md-icon md-list-icon>book</md-icon>\n            <span md-line>My Collection</span>\n            <span md-line class=\"secondary\">View your book collection!</span>\n          </a>\n          <a md-list-item linkTo=\"/book/find\" (click)=\"sidenav.close()\">\n            <md-icon md-list-icon>search</md-icon>\n            <span md-line>Browse Books</span>\n            <span md-line class=\"secondary\">Find your next book!</span>\n          </a>\n        </md-nav-list>\n      </md-sidenav>\n      <md-toolbar color=\"primary\">\n        <button md-icon-button (click)=\"sidenav.open()\">\n          <md-icon>menu</md-icon>\n        </button>\n        <span>Books Sample App</span>\n      </md-toolbar>\n\n      <route-view></route-view>\n\n    </md-sidenav-layout>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },
/* 491 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
	 */
	var schema = {
	    version: 1,
	    name: 'books_app',
	    stores: {
	        books: {
	            autoIncrement: true,
	            primaryKey: 'id'
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = schema;


/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(235);
	__webpack_require__(33);
	__webpack_require__(668);
	__webpack_require__(87);
	__webpack_require__(103);
	__webpack_require__(106);
	__webpack_require__(671);
	__webpack_require__(384);
	__webpack_require__(102);
	var core_1 = __webpack_require__(1);
	var effects_1 = __webpack_require__(337);
	var Observable_1 = __webpack_require__(3);
	var db_1 = __webpack_require__(335);
	var google_books_1 = __webpack_require__(213);
	var book_1 = __webpack_require__(89);
	var BookEffects = (function () {
	    function BookEffects(updates$, googleBooks, db, bookActions) {
	        var _this = this;
	        this.updates$ = updates$;
	        this.googleBooks = googleBooks;
	        this.db = db;
	        this.bookActions = bookActions;
	        /**
	         * Effects offer a way to isolate and easily test side-effects within your
	         * application. StateUpdates is an observable of the latest state and
	         * dispatched action. The `toPayload` helper function returns just
	         * the payload of the currently dispatched action, useful in
	         * instances where the current state is not necessary.
	         *
	         * If you are unfamiliar with the operators being used in these examples, please
	         * check out the sources below:
	         *
	         * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
	         * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
	         */
	        this.openDB$ = this.db.open('books_app').filter(function () { return false; });
	        this.loadCollectionOnInit$ = Observable_1.Observable.of(this.bookActions.loadCollection());
	        this.loadCollection$ = this.updates$
	            .whenAction(book_1.BookActions.LOAD_COLLECTION)
	            .switchMapTo(this.db.query('books').toArray())
	            .map(function (books) { return _this.bookActions.loadCollectionSuccess(books); });
	        this.search$ = this.updates$
	            .whenAction(book_1.BookActions.SEARCH)
	            .map(effects_1.toPayload)
	            .filter(function (query) { return query !== ''; })
	            .switchMap(function (query) { return _this.googleBooks.searchBooks(query)
	            .map(function (books) { return _this.bookActions.searchComplete(books); })
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.searchComplete([])); }); });
	        this.clearSearch$ = this.updates$
	            .whenAction(book_1.BookActions.SEARCH)
	            .map(effects_1.toPayload)
	            .filter(function (query) { return query === ''; })
	            .mapTo(this.bookActions.searchComplete([]));
	        this.addBookToCollection$ = this.updates$
	            .whenAction(book_1.BookActions.ADD_TO_COLLECTION)
	            .map(effects_1.toPayload)
	            .mergeMap(function (book) { return _this.db.insert('books', [book])
	            .mapTo(_this.bookActions.addToCollectionSuccess(book))
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.removeFromCollectionFail(book)); }); });
	        this.removeBookFromCollection$ = this.updates$
	            .whenAction(book_1.BookActions.REMOVE_FROM_COLLECTION)
	            .map(effects_1.toPayload)
	            .mergeMap(function (book) { return _this.db.executeWrite('books', 'delete', [book.id])
	            .mapTo(_this.bookActions.removeFromCollectionSuccess(book))
	            .catch(function () { return Observable_1.Observable.of(_this.bookActions.removeFromCollectionFail(book)); }); });
	    }
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "openDB$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "loadCollectionOnInit$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "loadCollection$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "search$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "clearSearch$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "addBookToCollection$", void 0);
	    __decorate([
	        effects_1.Effect(), 
	        __metadata('design:type', Object)
	    ], BookEffects.prototype, "removeBookFromCollection$", void 0);
	    BookEffects = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [effects_1.StateUpdates, google_books_1.GoogleBooksService, db_1.Database, book_1.BookActions])
	    ], BookEffects);
	    return BookEffects;
	}());
	exports.BookEffects = BookEffects;


/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_1 = __webpack_require__(492);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    book_1.BookEffects
	];


/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(248);
	__webpack_require__(667);
	__webpack_require__(662);
	var core_1 = __webpack_require__(1);
	var store_1 = __webpack_require__(69);
	var Observable_1 = __webpack_require__(3);
	var google_books_1 = __webpack_require__(213);
	var reducers_1 = __webpack_require__(244);
	var book_1 = __webpack_require__(89);
	/**
	 * Guards are hooks into the route resolution process, providing an opportunity
	 * to inform the router's traversal process whether the route should continue
	 * to be considered a candidate route. Guards must return an observable of
	 * true or false.
	 *
	 * More on guards: https://github.com/ngrx/router/blob/master/docs/overview/guards.md
	 */
	var BookExistsGuard = (function () {
	    function BookExistsGuard(store, googleBooks, bookActions) {
	        this.store = store;
	        this.googleBooks = googleBooks;
	        this.bookActions = bookActions;
	    }
	    /**
	     * This method creates an observable that waits for the `loaded` property
	     * of the collection state to turn `true`, emitting one time once loading
	     * has finished.
	     */
	    BookExistsGuard.prototype.waitForCollectionToLoad = function () {
	        return this.store.let(reducers_1.getCollectionLoaded())
	            .filter(function (loaded) { return loaded; })
	            .take(1);
	    };
	    /**
	     * This method checks if a book with the given ID is already registered
	     * in the Store
	     */
	    BookExistsGuard.prototype.hasBookInStore = function (id) {
	        return this.store.let(reducers_1.hasBook(id)).take(1);
	    };
	    /**
	     * This method loads a book with the given ID from the API and caches
	     * it in the store, returning `true` or `false` if it was found.
	     */
	    BookExistsGuard.prototype.hasBookInApi = function (id) {
	        var _this = this;
	        return this.googleBooks.retrieveBook(id)
	            .map(function (book) { return _this.bookActions.loadBook(book); })
	            .do(function (action) { return _this.store.dispatch(action); })
	            .map(function (book) { return !!book; })
	            .catch(function () { return Observable_1.Observable.of(false); });
	    };
	    /**
	     * `hasBook` composes `hasBookInStore` and `hasBookInApi`. It first checks
	     * if the book is in store, and if not it then checks if it is in the
	     * API.
	     */
	    BookExistsGuard.prototype.hasBook = function (id) {
	        var _this = this;
	        return this.hasBookInStore(id)
	            .switchMap(function (inStore) {
	            if (inStore) {
	                return Observable_1.Observable.of(inStore);
	            }
	            return _this.hasBookInApi(id);
	        });
	    };
	    /**
	     * This is the actual method the router will call when our guard is run.
	     *
	     * Our guard waits for the collection to load, then it checks if we need
	     * to request a book from the API or if we already have it in our cache.
	     * If it finds it in the cache or in the API, it returns an Observable
	     * of `true` and the route is rendered successfully.
	     *
	     * If it was unable to find it in our cache or in the API, this guard
	     * will return an Observable of `false`, causing the router to move
	     * on to the next candidate route. In this case, it will move on
	     * to the 404 page.
	     */
	    BookExistsGuard.prototype.protectRoute = function (_a) {
	        var id = _a.routeParams.id;
	        return this.waitForCollectionToLoad()
	            .switchMapTo(this.hasBook(id));
	    };
	    BookExistsGuard = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [store_1.Store, google_books_1.GoogleBooksService, book_1.BookActions])
	    ], BookExistsGuard);
	    return BookExistsGuard;
	}());
	exports.BookExistsGuard = BookExistsGuard;


/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var book_exists_1 = __webpack_require__(494);
	exports.BookExistsGuard = book_exists_1.BookExistsGuard;


/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(105);
	__webpack_require__(33);
	var actions_1 = __webpack_require__(246);
	;
	var initialState = {
	    ids: [],
	    entities: {}
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case actions_1.BookActions.SEARCH_COMPLETE:
	        case actions_1.BookActions.LOAD_COLLECTION_SUCCESS: {
	            var books = action.payload;
	            var newBooks = books.filter(function (book) { return !state.entities[book.id]; });
	            var newBookIds = newBooks.map(function (book) { return book.id; });
	            var newBookEntities = newBooks.reduce(function (entities, book) {
	                return Object.assign(entities, (_a = {},
	                    _a[book.id] = book,
	                    _a
	                ));
	                var _a;
	            }, {});
	            return {
	                ids: state.ids.concat(newBookIds),
	                entities: Object.assign({}, state.entities, newBookEntities)
	            };
	        }
	        case actions_1.BookActions.LOAD_BOOK: {
	            var book = action.payload;
	            if (state.ids.includes(book.id)) {
	                return state;
	            }
	            return {
	                ids: state.ids.concat([book.id]),
	                entities: Object.assign({}, state.entities, (_a = {},
	                    _a[book.id] = book,
	                    _a
	                ))
	            };
	        }
	        default: {
	            return state;
	        }
	    }
	    var _a;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	/**
	 * Because the data structure is defined within the reducer it is optimal to
	 * locate our selector functions at this level. If store is to be thought of
	 * as a database, and reducers the tables, selectors can be considered the
	 * queries into said database. Remember to keep your selectors small and
	 * focused so they can be combined and composed to fit each particular
	 * use-case.
	 */
	function getBookEntities() {
	    return function (state$) { return state$
	        .select(function (s) { return s.entities; }); };
	}
	exports.getBookEntities = getBookEntities;
	;
	function getBook(id) {
	    return function (state$) { return state$
	        .select(function (s) { return s.entities[id]; }); };
	}
	exports.getBook = getBook;
	function getBooks(bookIds) {
	    return function (state$) { return state$
	        .let(getBookEntities())
	        .map(function (entities) { return bookIds.map(function (id) { return entities[id]; }); }); };
	}
	exports.getBooks = getBooks;
	function hasBook(id) {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids.includes(id); }); };
	}
	exports.hasBook = hasBook;


/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(105);
	__webpack_require__(33);
	var book_1 = __webpack_require__(89);
	;
	var initialState = {
	    loaded: false,
	    loading: false,
	    ids: []
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case book_1.BookActions.LOAD_COLLECTION: {
	            return Object.assign({}, state, {
	                loading: true
	            });
	        }
	        case book_1.BookActions.LOAD_COLLECTION_SUCCESS: {
	            var books = action.payload;
	            return {
	                loaded: true,
	                loading: false,
	                ids: books.map(function (book) { return book.id; })
	            };
	        }
	        case book_1.BookActions.ADD_TO_COLLECTION_SUCCESS:
	        case book_1.BookActions.REMOVE_FROM_COLLECTION_FAIL: {
	            var book = action.payload;
	            if (state.ids.includes(book.id)) {
	                return state;
	            }
	            return Object.assign({}, state, {
	                ids: state.ids.concat([book.id])
	            });
	        }
	        case book_1.BookActions.REMOVE_FROM_COLLECTION_SUCCESS:
	        case book_1.BookActions.ADD_TO_COLLECTION_FAIL: {
	            var book_2 = action.payload;
	            return Object.assign({}, state, {
	                ids: state.ids.filter(function (id) { return id !== book_2.id; })
	            });
	        }
	        default: {
	            return state;
	        }
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	function getLoaded() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loaded; }); };
	}
	exports.getLoaded = getLoaded;
	function getLoading() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loading; }); };
	}
	exports.getLoading = getLoading;
	function getBookIds() {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids; }); };
	}
	exports.getBookIds = getBookIds;
	function isBookInCollection(id) {
	    return function (state$) { return state$
	        .let(getBookIds())
	        .map(function (ids) { return ids.includes(id); }); };
	}
	exports.isBookInCollection = isBookInCollection;


/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(105);
	var book_1 = __webpack_require__(89);
	;
	var initialState = {
	    ids: [],
	    loading: false,
	    query: ''
	};
	function default_1(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case book_1.BookActions.SEARCH: {
	            var query = action.payload;
	            return Object.assign(state, {
	                query: query,
	                loading: true
	            });
	        }
	        case book_1.BookActions.SEARCH_COMPLETE: {
	            var books = action.payload;
	            return {
	                ids: books.map(function (book) { return book.id; }),
	                loading: false,
	                query: state.query
	            };
	        }
	        default: {
	            return state;
	        }
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;
	function getStatus() {
	    return function (state$) { return state$
	        .select(function (s) { return s.loading; }); };
	}
	exports.getStatus = getStatus;
	function getBookIds() {
	    return function (state$) { return state$
	        .select(function (s) { return s.ids; }); };
	}
	exports.getBookIds = getBookIds;
	function getQuery() {
	    return function (state$) { return state$
	        .select(function (s) { return s.query; }); };
	}
	exports.getQuery = getQuery;


/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var guards_1 = __webpack_require__(495);
	var routes = [
	    {
	        path: '/',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                resolve(__webpack_require__(718).CollectionPage);
	            });
	        }); }
	    },
	    {
	        path: '/book/find',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                resolve(__webpack_require__(716).BookFindPage);
	            });
	        }); }
	    },
	    {
	        path: '/book/:id',
	        guards: [guards_1.BookExistsGuard],
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(3, function (require) {
	                resolve(__webpack_require__(717).BookViewPage);
	            });
	        }); }
	    },
	    {
	        path: '/*',
	        loadComponent: function () { return new Promise(function (resolve) {
	            __webpack_require__.e/* nsure */(4, function (require) {
	                resolve(__webpack_require__(719).NotFoundPage);
	            });
	        }); }
	    }
	];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = routes;


/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var http_1 = __webpack_require__(127);
	var google_books_1 = __webpack_require__(213);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = [
	    http_1.HTTP_PROVIDERS,
	    google_books_1.GoogleBooksService
	];


/***/ },
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 655 */
/***/ function(module, exports) {

	"use strict";
	var logger = console;
	var INIT_ACTION = "@ngrx/store/init";
	var repeat = function (str, times) { return (new Array(times + 1)).join(str); };
	var pad = function (num, maxLength) { return repeat("0", maxLength - num.toString().length) + num; };
	var formatTime = function (time) { return ("@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3)); };
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	var getLogLevel = function (level, action, payload, type) {
	    switch (typeof level) {
	        case "object":
	            return typeof level[type] === "function" ? level[type].apply(level, payload) : level[type];
	        case "function":
	            return level(action);
	        default:
	            return level;
	    }
	};
	var printBuffer = function (options) { return function (logBuffer) {
	    var actionTransformer = options.actionTransformer, collapsed = options.collapsed, colors = options.colors, timestamp = options.timestamp, duration = options.duration, level = options.level;
	    logBuffer.forEach(function (logEntry, key) {
	        var started = logEntry.started, startedTime = logEntry.startedTime, action = logEntry.action, prevState = logEntry.prevState, error = logEntry.error;
	        var took = logEntry.took, nextState = logEntry.nextState;
	        var nextEntry = logBuffer[key + 1];
	        if (nextEntry) {
	            nextState = nextEntry.prevState;
	            took = nextEntry.started - started;
	        }
	        var formattedAction = actionTransformer(action);
	        var isCollapsed = (typeof collapsed === "function") ? collapsed(function () { return nextState; }, action) : collapsed;
	        var formattedTime = formatTime(startedTime);
	        var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	        var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	        try {
	            if (isCollapsed) {
	                if (colors.title)
	                    logger.groupCollapsed("%c " + title, titleCSS);
	                else
	                    logger.groupCollapsed(title);
	            }
	            else {
	                if (colors.title)
	                    logger.group("%c " + title, titleCSS);
	                else
	                    logger.group(title);
	            }
	        }
	        catch (e) {
	            logger.log(title);
	        }
	        var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	        var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	        var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	        var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	        if (prevStateLevel) {
	            if (colors.prevState)
	                logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);
	            else
	                logger[prevStateLevel]("prev state", prevState);
	        }
	        if (actionLevel) {
	            if (colors.action)
	                logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);
	            else
	                logger[actionLevel]("action", formattedAction);
	        }
	        if (error && errorLevel) {
	            if (colors.error)
	                logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);
	            else
	                logger[errorLevel]("error", error);
	        }
	        if (nextStateLevel) {
	            if (colors.nextState)
	                logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);
	            else
	                logger[nextStateLevel]("next state", nextState);
	        }
	        try {
	            logger.groupEnd();
	        }
	        catch (e) {
	            logger.log("\u2014\u2014 log end \u2014\u2014");
	        }
	    });
	    logBuffer.length = 0;
	}; };
	exports.storeLogger = function (opts) {
	    if (opts === void 0) { opts = {}; }
	    return function (reducer) {
	        var log = {};
	        var ua = window && window.navigator.userAgent ? window.navigator.userAgent : '';
	        var ms_ie = false;
	        //fix for action display in IE
	        var old_ie = ua.indexOf('MSIE ');
	        var new_ie = ua.indexOf('Trident/');
	        if ((old_ie > -1) || (new_ie > -1)) {
	            ms_ie = true;
	        }
	        var defaults = {
	            level: "log",
	            collapsed: false,
	            duration: false,
	            timestamp: true,
	            stateTransformer: function (state) { return state; },
	            actionTransformer: function (actn) { return actn; },
	            colors: ms_ie ? {} : {
	                title: function () { return "#000000"; },
	                prevState: function () { return "#9E9E9E"; },
	                action: function () { return "#03A9F4"; },
	                nextState: function () { return "#4CAF50"; },
	                error: function () { return "#F20404"; },
	            }
	        };
	        var options = Object.assign({}, defaults, opts);
	        var stateTransformer = options.stateTransformer;
	        var buffer = printBuffer(options);
	        return function (state, action) {
	            var preLog = {
	                started: timer.now(),
	                startedTime: new Date(),
	                prevState: stateTransformer(log),
	                action: action
	            };
	            var nextState = reducer(state, action);
	            var postLog = {
	                took: timer.now() - preLog.started,
	                nextState: stateTransformer(nextState)
	            };
	            log = Object.assign({}, preLog, postLog);
	            //ignore init action fired by store and devtools
	            if (action.type !== INIT_ACTION) {
	                buffer([log]);
	            }
	            return nextState;
	        };
	    };
	};


/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(654)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 657 */,
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` exception.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 660 */,
/* 661 */,
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concat_1 = __webpack_require__(677);
	Observable_1.Observable.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var forkJoin_1 = __webpack_require__(678);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var concatMap_1 = __webpack_require__(684);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var every_1 = __webpack_require__(686);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var finally_1 = __webpack_require__(687);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var first_1 = __webpack_require__(688);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var mapTo_1 = __webpack_require__(690);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var publishReplay_1 = __webpack_require__(693);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var share_1 = __webpack_require__(695);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var switchMapTo_1 = __webpack_require__(697);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var ScalarObservable_1 = __webpack_require__(385);
	var EmptyObservable_1 = __webpack_require__(143);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var Subscriber_1 = __webpack_require__(16);
	var Subscription_1 = __webpack_require__(86);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(3);
	var EmptyObservable_1 = __webpack_require__(143);
	var isArray_1 = __webpack_require__(148);
	var subscribeToResult_1 = __webpack_require__(88);
	var OuterSubscriber_1 = __webpack_require__(85);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(148);
	var isFunction_1 = __webpack_require__(149);
	var isPromise_1 = __webpack_require__(394);
	var isScheduler_1 = __webpack_require__(150);
	var PromiseObservable_1 = __webpack_require__(144);
	var IteratorObservable_1 = __webpack_require__(676);
	var ArrayObservable_1 = __webpack_require__(142);
	var ArrayLikeObservable_1 = __webpack_require__(672);
	var observable_1 = __webpack_require__(241);
	var iterator_1 = __webpack_require__(240);
	var Observable_1 = __webpack_require__(3);
	var observeOn_1 = __webpack_require__(145);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[observable_1.$$observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[observable_1.$$observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(40);
	var isObject_1 = __webpack_require__(393);
	var tryCatch_1 = __webpack_require__(243);
	var Observable_1 = __webpack_require__(3);
	var isFunction_1 = __webpack_require__(149);
	var iterator_1 = __webpack_require__(240);
	var errorObject_1 = __webpack_require__(147);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[iterator_1.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[iterator_1.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(683);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(674);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromObservable_1 = __webpack_require__(675);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(691);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(142);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(150);
	var ArrayObservable_1 = __webpack_require__(142);
	var mergeAll_1 = __webpack_require__(388);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 684 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(389);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    var source = this;
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	    };
	    return EveryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var Subscription_1 = __webpack_require__(86);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var EmptyError_1 = __webpack_require__(706);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 689 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(142);
	var mergeAll_1 = __webpack_require__(388);
	var isScheduler_1 = __webpack_require__(150);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(237);
	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(380);
	var multicast_1 = __webpack_require__(390);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * Applies an accumulation function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(390);
	var Subject_1 = __webpack_require__(36);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(85);
	var subscribeToResult_1 = __webpack_require__(88);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(85);
	var subscribeToResult_1 = __webpack_require__(88);
	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	    };
	    return SwitchMapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	var ArgumentOutOfRangeError_1 = __webpack_require__(705);
	var EmptyObservable_1 = __webpack_require__(143);
	/**
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 * @param total
	 * @return {any}
	 * @method take
	 * @owner Observable
	 */
	function take(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeSubscriber(subscriber, this.total));
	    };
	    return TakeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	                this.unsubscribe();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(16);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 700 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(707);
	var FutureAction_1 = __webpack_require__(146);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 701 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(700);
	var QueueScheduler_1 = __webpack_require__(239);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 702 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(146);
	var QueueScheduler_1 = __webpack_require__(239);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsyncScheduler.prototype.scheduleNow = function (work, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
	    };
	    return AsyncScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(146);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 704 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(701);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 705 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 706 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(40);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map

/***/ },
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ }
]);