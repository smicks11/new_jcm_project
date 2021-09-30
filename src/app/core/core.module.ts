import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { throwIfAlreadyLoaded } from "./guards/module-import.guard";

@NgModule({
  imports: [HttpClientModule],
  providers: [],
  declarations: [],
})
// guard against a lazy-loaded module re-importing CoreModule
// imported once in the AppModule and never again in the other modules
// the core module is a singleton
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }

  
}
