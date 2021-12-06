/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("The Home View", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully loads", () => {
    cy.visit("/");
  });

  it("app should have a title", () => {
    cy.contains("BFree Test");
  });

  it("should show error if input is empty", () => {
    cy.get("#submit-button").click();
    cy.contains("Url is required");
  });

  it("should show error if input is not a valid url", () => {
    cy.get("#text-input").type("hello");
    cy.get("#submit-button").click();
    cy.contains("Invalid URL e.g https://google.com or google.com");
  });

  it("should show no data available currently", () => {
    cy.visit("/qrcodes");
    cy.contains("No Data Available Currently");
  });

  it("should return visitor back to home on qrcode view back button click", () => {
    cy.visit("/qrcodes");
    cy.get("#view-back-button").click();
    cy.contains("See All QRcodes");
  });

  it("should return visitor back to home on nav bar back button click", () => {
    cy.visit("/qrcodes");
    cy.get("#nav-back-button").click();
    cy.contains("See All QRcodes");
  });

  it("should generate qrcode", () => {
    const generatedDomain = chance.domain();
    cy.get("#text-input").type(generatedDomain);
    cy.get("#submit-button").click();

    // assert url
    cy.url().should("include", "qrcodes");

    cy.contains(generatedDomain);
  });

  it("should have button disabled after the 10th qrcode", () => {
    for (let index = 0; index < 10; index++) {
      if (index >= 10) {
        cy.get("#submit-button").should("be.disabled");
      } else {
        const generatedDomain = chance.domain();
        cy.get("#text-input").type(generatedDomain);
        cy.get("#submit-button").click();
        cy.get("#nav-back-button").click();
      }
    }
  });

  it("should clear qrcodes on refresh and enable button", () => {
    cy.get("#submit-button").should("not.be.disabled");

    cy.visit("/qrcodes");
    cy.contains("No Data Available Currently");
  });
});
