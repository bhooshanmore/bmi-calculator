/* eslint-env mocha */

const assert = require("chai").assert;
const app = require("../utility/utility");
// const app = require("../test/sampleReq.json");
// const https = require('https')
// const chai = require('chai'),
// chaiHttp = require('chai-http'),
// server = require('../app'),
// faker = require('faker'),
// should = chai.should();
// chai.use(chaiHttp);

describe("Testing bmi_category_and_health_risk() ", function () {
  it("Testing bmi_category_and_health_risk return not null ", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.isNotEmpty(result);
  });

  it("Testing BMI", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.equal(result.bmi, 18.4, "checking correct BMI");
  });

  it("Testing BMI return type as Number", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.isNumber(result.bmi);
  });

  it("Testing Category", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.equal(result.category, "Underweight", "Underweight");
  });

  it("Testing Category return type as string", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.isString(result.category);
  });

  it("Testing Health_risk", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.equal(
      result.health_risk,
      "Malnutrition risk",
      "checking Malnutrition risk"
    );
  });

  it("Testing Health_risk return type as string", function () {
    let result = app.bmi_category_and_health_risk(18.4);
    assert.isString(result.health_risk);
  });

  it("Testing by passing Zero(0) to bmi_category_and_health_risk() ", function () {
    let result = app.bmi_category_and_health_risk(0);
    assert.equal(result.bmi, 0, "checking correct BMI");
  });
});
