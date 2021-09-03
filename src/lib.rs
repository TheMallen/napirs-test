#[macro_use]
extern crate napi_derive;

mod math;

use math::fibonacci;
use napi::{Env, JsObject, Result};

#[module_exports]
fn init(mut exports: JsObject, _env: Env) -> Result<()> {
  exports.create_named_method("fibonacci", fibonacci)?;
  // testing CI
  // exports.set_named_property("DEFAULT_VALUE", env.create_int64(100)?)?;
  Ok(())
}
