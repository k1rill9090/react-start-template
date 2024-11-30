(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[801],{"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Browser});const{slice,forEach}=[];const fieldContentRegExp=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,cookie={create(name,value,minutes,domain){let cookieOptions=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};minutes&&(cookieOptions.expires=new Date,cookieOptions.expires.setTime(cookieOptions.expires.getTime()+60*minutes*1e3)),domain&&(cookieOptions.domain=domain),document.cookie=((name,val,options)=>{const opt=options||{};opt.path=opt.path||"/";let str=`${name}=${encodeURIComponent(val)}`;if(opt.maxAge>0){const maxAge=opt.maxAge-0;if(Number.isNaN(maxAge))throw new Error("maxAge should be a Number");str+=`; Max-Age=${Math.floor(maxAge)}`}if(opt.domain){if(!fieldContentRegExp.test(opt.domain))throw new TypeError("option domain is invalid");str+=`; Domain=${opt.domain}`}if(opt.path){if(!fieldContentRegExp.test(opt.path))throw new TypeError("option path is invalid");str+=`; Path=${opt.path}`}if(opt.expires){if("function"!=typeof opt.expires.toUTCString)throw new TypeError("option expires is invalid");str+=`; Expires=${opt.expires.toUTCString()}`}if(opt.httpOnly&&(str+="; HttpOnly"),opt.secure&&(str+="; Secure"),opt.sameSite)switch("string"==typeof opt.sameSite?opt.sameSite.toLowerCase():opt.sameSite){case!0:str+="; SameSite=Strict";break;case"lax":str+="; SameSite=Lax";break;case"strict":str+="; SameSite=Strict";break;case"none":str+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return str})(name,encodeURIComponent(value),cookieOptions)},read(name){const nameEQ=`${name}=`,ca=document.cookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];for(;" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null},remove(name){this.create(name,"",-1)}};var cookie$1={name:"cookie",lookup(_ref){let{lookupCookie}=_ref;if(lookupCookie&&"undefined"!=typeof document)return cookie.read(lookupCookie)||void 0},cacheUserLanguage(lng,_ref2){let{lookupCookie,cookieMinutes,cookieDomain,cookieOptions}=_ref2;lookupCookie&&"undefined"!=typeof document&&cookie.create(lookupCookie,lng,cookieMinutes,cookieDomain,cookieOptions)}},querystring={name:"querystring",lookup(_ref){let found,{lookupQuerystring}=_ref;if("undefined"!=typeof window){let{search}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(search=window.location.hash.substring(window.location.hash.indexOf("?")));const params=search.substring(1).split("&");for(let i=0;i<params.length;i++){const pos=params[i].indexOf("=");if(pos>0){params[i].substring(0,pos)===lookupQuerystring&&(found=params[i].substring(pos+1))}}}return found}};let hasLocalStorageSupport=null;const localStorageAvailable=()=>{if(null!==hasLocalStorageSupport)return hasLocalStorageSupport;try{hasLocalStorageSupport="undefined"!==window&&null!==window.localStorage;const testKey="i18next.translate.boo";window.localStorage.setItem(testKey,"foo"),window.localStorage.removeItem(testKey)}catch(e){hasLocalStorageSupport=!1}return hasLocalStorageSupport};var localStorage={name:"localStorage",lookup(_ref){let{lookupLocalStorage}=_ref;if(lookupLocalStorage&&localStorageAvailable())return window.localStorage.getItem(lookupLocalStorage)||void 0},cacheUserLanguage(lng,_ref2){let{lookupLocalStorage}=_ref2;lookupLocalStorage&&localStorageAvailable()&&window.localStorage.setItem(lookupLocalStorage,lng)}};let hasSessionStorageSupport=null;const sessionStorageAvailable=()=>{if(null!==hasSessionStorageSupport)return hasSessionStorageSupport;try{hasSessionStorageSupport="undefined"!==window&&null!==window.sessionStorage;const testKey="i18next.translate.boo";window.sessionStorage.setItem(testKey,"foo"),window.sessionStorage.removeItem(testKey)}catch(e){hasSessionStorageSupport=!1}return hasSessionStorageSupport};var sessionStorage={name:"sessionStorage",lookup(_ref){let{lookupSessionStorage}=_ref;if(lookupSessionStorage&&sessionStorageAvailable())return window.sessionStorage.getItem(lookupSessionStorage)||void 0},cacheUserLanguage(lng,_ref2){let{lookupSessionStorage}=_ref2;lookupSessionStorage&&sessionStorageAvailable()&&window.sessionStorage.setItem(lookupSessionStorage,lng)}},navigator$1={name:"navigator",lookup(options){const found=[];if("undefined"!=typeof navigator){const{languages,userLanguage,language}=navigator;if(languages)for(let i=0;i<languages.length;i++)found.push(languages[i]);userLanguage&&found.push(userLanguage),language&&found.push(language)}return found.length>0?found:void 0}},htmlTag={name:"htmlTag",lookup(_ref){let found,{htmlTag}=_ref;const internalHtmlTag=htmlTag||("undefined"!=typeof document?document.documentElement:null);return internalHtmlTag&&"function"==typeof internalHtmlTag.getAttribute&&(found=internalHtmlTag.getAttribute("lang")),found}},path={name:"path",lookup(_ref){let{lookupFromPathIndex}=_ref;if("undefined"==typeof window)return;const language=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(language))return;const index="number"==typeof lookupFromPathIndex?lookupFromPathIndex:0;return language[index]?.replace("/","")}},subdomain={name:"subdomain",lookup(_ref){let{lookupFromSubdomainIndex}=_ref;const internalLookupFromSubdomainIndex="number"==typeof lookupFromSubdomainIndex?lookupFromSubdomainIndex+1:1,language="undefined"!=typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(language)return language[internalLookupFromSubdomainIndex]}};class Browser{constructor(services){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(services,options)}init(services){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nOptions=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=services||{languageUtils:{}},this.options=function defaults(obj){return forEach.call(slice.call(arguments,1),(source=>{if(source)for(const prop in source)void 0===obj[prop]&&(obj[prop]=source[prop])})),obj}(options,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:l=>l}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=l=>l.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i18nOptions,this.addDetector(cookie$1),this.addDetector(querystring),this.addDetector(localStorage),this.addDetector(sessionStorage),this.addDetector(navigator$1),this.addDetector(htmlTag),this.addDetector(path),this.addDetector(subdomain)}addDetector(detector){return this.detectors[detector.name]=detector,this}detect(detectionOrder){detectionOrder||(detectionOrder=this.options.order);let detected=[];return detectionOrder.forEach((detectorName=>{if(this.detectors[detectorName]){let lookup=this.detectors[detectorName].lookup(this.options);lookup&&"string"==typeof lookup&&(lookup=[lookup]),lookup&&(detected=detected.concat(lookup))}})),detected=detected.map((d=>this.options.convertDetectedLanguage(d))),this.services.languageUtils.getBestMatchFromCodes?detected:detected.length>0?detected[0]:null}cacheUserLanguage(lng,caches){caches||(caches=this.options.caches),caches&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(lng)>-1||caches.forEach((cacheName=>{this.detectors[cacheName]&&this.detectors[cacheName].cacheUserLanguage(lng,this.options)})))}}Browser.type="languageDetector"},"./node_modules/react-i18next/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a3:()=>I18nextProvider,Db:()=>initReactI18next,$G:()=>useTranslation_useTranslation});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/void-elements/index.js");Object.create(null);const alreadyWarned={},utils_warnOnce=(...args)=>{utils_isString(args[0])&&alreadyWarned[args[0]]||(utils_isString(args[0])&&(alreadyWarned[args[0]]=new Date),((...args)=>{console?.warn&&(utils_isString(args[0])&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args))})(...args))},loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{const initialized=()=>{setTimeout((()=>{i18n.off("initialized",initialized)}),0),cb()};i18n.on("initialized",initialized)}},loadNamespaces=(i18n,ns,cb)=>{i18n.loadNamespaces(ns,loadedClb(i18n,cb))},loadLanguages=(i18n,lng,ns,cb)=>{utils_isString(ns)&&(ns=[ns]),ns.forEach((n=>{i18n.options.ns.indexOf(n)<0&&i18n.options.ns.push(n)})),i18n.loadLanguages(lng,loadedClb(i18n,cb))},utils_isString=obj=>"string"==typeof obj,matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m];let defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};let i18nInstance;const initReactI18next={type:"3rdParty",init(instance){((options={})=>{defaultOptions={...defaultOptions,...options}})(instance.options.react),(instance=>{i18nInstance=instance})(instance)}},context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach((ns=>{this.usedNamespaces[ns]||(this.usedNamespaces[ns]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const alwaysNewT=(i18n,language,namespace,keyPrefix)=>i18n.getFixedT(language,namespace,keyPrefix),useTranslation_useTranslation=(ns,props={})=>{const{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||i18nInstance;if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");const notReadyT=(k,optsOrDefaultValue)=>{return utils_isString(optsOrDefaultValue)?optsOrDefaultValue:"object"==typeof(obj=optsOrDefaultValue)&&null!==obj&&utils_isString(optsOrDefaultValue.defaultValue)?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k;var obj},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react?.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i18nOptions={...defaultOptions,...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions;let namespaces=ns||defaultNSFromContext||i18n.options?.defaultNS;namespaces=utils_isString(namespaces)?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces?.(namespaces);const ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((n=>((ns,i18n,options={})=>i18n.languages&&i18n.languages.length?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n?.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0))(n,i18n,i18nOptions))),memoGetT=((i18n,language,namespace,keyPrefix)=>(0,react.useCallback)(alwaysNewT(i18n,language,namespace,keyPrefix),[i18n,language,namespace,keyPrefix]))(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),getT=()=>memoGetT,getNewT=()=>alwaysNewT(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),[t,setT]=(0,react.useState)(getT);let joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);const previousJoinedNS=((value,ignore)=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=ignore?ref.current:value}),[value,ignore]),ref.current})(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((()=>{const{bindI18n,bindI18nStore}=i18nOptions;isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>{isMounted.current&&setT(getNewT)})):loadNamespaces(i18n,namespaces,(()=>{isMounted.current&&setT(getNewT)}))),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getNewT);const boundReset=()=>{isMounted.current&&setT(getNewT)};return bindI18n&&i18n?.on(bindI18n,boundReset),bindI18nStore&&i18n?.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,i18n&&bindI18n?.split(" ").forEach((e=>i18n.off(e,boundReset))),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((e=>i18n.store.off(e,boundReset)))}}),[i18n,joinedNS]),(0,react.useEffect)((()=>{isMounted.current&&ready&&setT(getT)}),[i18n,keyPrefix,ready]);const ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>resolve())):loadNamespaces(i18n,namespaces,(()=>resolve()))}))};function I18nextProvider({i18n,defaultNS,children}){const value=(0,react.useMemo)((()=>({i18n,defaultNS})),[i18n,defaultNS]);return(0,react.createElement)(context_I18nContext.Provider,{value},children)}},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);