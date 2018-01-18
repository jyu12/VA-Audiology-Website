/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from './home/home.component.ngfactory';
import * as i4 from './check-in/check-in.component.ngfactory';
import * as i5 from './appointments/appointments.component.ngfactory';
import * as i6 from './audiologist-navigation/audiologist-navigation.component.ngfactory';
import * as i7 from './thank-you/thank-you.component.ngfactory';
import * as i8 from './no-content/no-content.component.ngfactory';
import * as i9 from './app.component.ngfactory';
import * as i10 from '@angular/common';
import * as i11 from '@angular/platform-browser';
import * as i12 from '@angular/animations/browser';
import * as i13 from '@angular/platform-browser/animations';
import * as i14 from '@angular/animations';
import * as i15 from '@angular/forms';
import * as i16 from '@angular/http';
import * as i17 from '@angular/router';
import * as i18 from '../../../src/app/app.resolver';
import * as i19 from '../../../src/app/home/home.component';
import * as i20 from '../../../src/app/check-in/check-in.component';
import * as i21 from '../../../src/app/appointments/appointments.component';
import * as i22 from '../../../src/app/audiologist-navigation/audiologist-navigation.component';
import * as i23 from '../../../src/app/thank-you/thank-you.component';
import * as i24 from '../../../src/app/no-content/no-content.component';
import * as i25 from '../../../src/app/app.service';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.CheckInComponentNgFactory,i5.AppointmentsComponentNgFactory,
              i6.AudiologistNavigationComponentNgFactory,i7.ThankYouComponentNgFactory,
              i8.NoContentComponentNgFactory,i9.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i10.NgLocalization,i10.NgLocaleLocalization,[i0.LOCALE_ID]),
          i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i11.DomSanitizer,i11.ɵe,[i10.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i11.DomSanitizer]),i0.ɵmpd(4608,i11.HAMMER_GESTURE_CONFIG,
              i11.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i11.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i11.ɵDomEventsPlugin(p0_0),new i11.ɵKeyEventsPlugin(p1_0),
                    new i11.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i10.DOCUMENT,i10.DOCUMENT,i10.DOCUMENT,i11.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i11.EventManager,i11.EventManager,[i11.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i11.ɵDomSharedStylesHost,i11.ɵDomSharedStylesHost,
              [i10.DOCUMENT]),i0.ɵmpd(4608,i11.ɵDomRendererFactory2,i11.ɵDomRendererFactory2,
              [i11.EventManager,i11.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i12.AnimationDriver,
              i13.ɵc,([] as any[])),i0.ɵmpd(5120,i12.ɵAnimationStyleNormalizer,i13.ɵd,
              ([] as any[])),i0.ɵmpd(4608,i12.ɵAnimationEngine,i13.ɵb,[i12.AnimationDriver,
              i12.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i13.ɵe,
              [i11.ɵDomRendererFactory2,i12.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(6144,
              i11.ɵSharedStylesHost,(null as any),[i11.ɵDomSharedStylesHost]),i0.ɵmpd(4608,
              i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i11.Meta,i11.Meta,
              [i10.DOCUMENT]),i0.ɵmpd(4608,i11.Title,i11.Title,[i10.DOCUMENT]),i0.ɵmpd(4608,
              i14.AnimationBuilder,i13.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i11.DOCUMENT]),i0.ɵmpd(4608,i15.ɵi,i15.ɵi,([] as any[])),i0.ɵmpd(4608,
              i16.BrowserXhr,i16.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i16.ResponseOptions,
              i16.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i16.XSRFStrategy,
              i16.ɵb,([] as any[])),i0.ɵmpd(4608,i16.XHRBackend,i16.XHRBackend,[i16.BrowserXhr,
              i16.ResponseOptions,i16.XSRFStrategy]),i0.ɵmpd(4608,i16.RequestOptions,
              i16.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i16.Http,i16.ɵc,[i16.XHRBackend,
              i16.RequestOptions]),i0.ɵmpd(5120,i17.ActivatedRoute,i17.ɵf,[i17.Router]),
          i0.ɵmpd(4608,i17.PreloadAllModules,i17.PreloadAllModules,([] as any[])),
          i0.ɵmpd(6144,i17.PreloadingStrategy,(null as any),[i17.PreloadAllModules]),
          i0.ɵmpd(135680,i17.RouterPreloader,i17.RouterPreloader,[i17.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i17.PreloadingStrategy]),i0.ɵmpd(4608,i17.NoPreloading,
              i17.NoPreloading,([] as any[])),i0.ɵmpd(5120,i17.ROUTER_INITIALIZER,
              i17.ɵi,[i17.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i17.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i18.DataResolver,i18.DataResolver,
              ([] as any[])),i0.ɵmpd(512,i10.CommonModule,i10.CommonModule,([] as any[])),
          i0.ɵmpd(1024,i0.ErrorHandler,i11.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,
              () => {
                return [i17.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i17.ɵg,i17.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i11.ɵc(p0_0,p0_1),i17.ɵh(p1_0)];
              },[[2,i11.NgProbeToken],[2,i0.NgProbeToken],i17.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i11.BrowserModule,i11.BrowserModule,[[3,i11.BrowserModule]]),
          i0.ɵmpd(512,i13.BrowserAnimationsModule,i13.BrowserAnimationsModule,([] as any[])),
          i0.ɵmpd(512,i15.ɵba,i15.ɵba,([] as any[])),i0.ɵmpd(512,i15.FormsModule,i15.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i16.HttpModule,i16.HttpModule,([] as any[])),
          i0.ɵmpd(1024,i17.ɵa,i17.ɵd,[[3,i17.Router]]),i0.ɵmpd(512,i17.UrlSerializer,
              i17.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,i17.ChildrenOutletContexts,
              i17.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,i17.ROUTER_CONFIGURATION,
              {preloadingStrategy:i17.PreloadAllModules},([] as any[])),i0.ɵmpd(1024,
              i10.LocationStrategy,i17.ɵc,[i10.PlatformLocation,[2,i10.APP_BASE_HREF],
                  i17.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i10.Location,i10.Location,
              [i10.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),
          i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,[i0.Compiler,
              [2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i17.ROUTES,() => {
            return [[{path:'',component:i19.HomeComponent},{path:'home',component:i19.HomeComponent},
                {path:'login',component:i20.CheckInComponent},{path:'appointments',
                    component:i21.AppointmentsComponent},{path:'audio-nav',component:i22.AudiologistNavigationComponent},
                {path:'thank-you',component:i23.ThankYouComponent},{path:'**',component:i24.NoContentComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i17.Router,i17.ɵe,[i0.ApplicationRef,i17.UrlSerializer,
              i17.ChildrenOutletContexts,i10.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i17.ROUTES,i17.ROUTER_CONFIGURATION,[2,i17.UrlHandlingStrategy],
              [2,i17.RouteReuseStrategy]]),i0.ɵmpd(512,i17.RouterModule,i17.RouterModule,
              [[2,i17.ɵa],[2,i17.Router]]),i0.ɵmpd(512,i25.AppState,i25.AppState,([] as any[])),
          i0.ɵmpd(512,i1.AppModule,i1.AppModule,[i0.ApplicationRef,i25.AppState])]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3R1dHV5aW4vVkEtQXVkaW9sb2d5LVdlYnNpdGUvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3R1dHV5aW4vVkEtQXVkaW9sb2d5LVdlYnNpdGUvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
