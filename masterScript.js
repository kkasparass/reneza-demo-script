(function () {
  function setReactData(selector, eventType, value) {
    const element = document.querySelector(selector);
    if (element.value) return;
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    nativeInputValueSetter.call(element, value);
    element.dispatchEvent(event);
  }

  function setRadioInput(selector) {
    const element = document.querySelector(selector);
    element.click();
  }

  function setTextarea(selector, eventType, value) {
    const element = document.querySelector(selector);
    if (element.value) return;
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(element, value);
    element.dispatchEvent(event);
  }

  function setReactSelectData(selector, eventType, identifier) {
    const element = document.querySelector(selector).children[0].children[0]
      .children[0].children[1].children[0].children[0];
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    nativeInputValueSetter.call(element, identifier);
    element.dispatchEvent(event);
    const enterEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    });
    element.dispatchEvent(enterEvent);
  }

  function scriptChecker() {
    setTimeout(() => {
      if (window.location.href.includes("/upload")) {
        window.removeEventListener("click", scriptChecker);
        runPropUploadScript();
        return;
      } else if (window.location.href.includes("app/background/references")) {
        window.removeEventListener("click", scriptChecker);
        runReferenceScript();
        return;
      } else if (window.location.href.includes("app/background/residential")) {
        window.removeEventListener("click", scriptChecker);
        runResidentialScript();
        return;
      } else if (window.location.href.includes("app/background/employment")) {
        window.removeEventListener("click", scriptChecker);
        runEmploymentScript();
        return;
      } else {
        window.removeEventListener("click", scriptChecker);
        window.addEventListener("click", scriptChecker);
      }
      return;
    }, 500);
  }

  function runPropUploadScript() {
    document
      .querySelector("button[type='submit']")
      .addEventListener("click", scriptChecker);
    const aTags = document.querySelectorAll("a");
    aTags.forEach((aTag) => {
      aTag.addEventListener("click", scriptChecker);
    });
    window.addEventListener("popstate", scriptChecker);
    if (document.querySelector("input[name='address.postcode']"))
      runBasicsScript();
    else if (document.querySelector("input[name='summary']"))
      runDetailsScript();
    else if (document.querySelector("input[name='monthlyRent.amount']"))
      runTenancyScript();
    return;
  }

  function runBasicsScript() {
    setReactData("input[name='address.postcode']", "change", "ES1 1ES");
    setReactData(
      "input[name='address.buildingName']",
      "change",
      "Bank Building"
    );
    setReactData("input[name='address.streetNumber']", "change", "21");
    setReactData("input[name='address.flatNumber']", "change", "44");
    setReactData("input[name='address.county']", "change", "London");
    setReactData("input[name='address.street']", "change", "Bank st");
    setReactData("input[name='address.town']", "change", "London");
    setReactData("input[name='address.country']", "change", "GB");
  }
  function runDetailsScript() {
    setRadioInput("input[name='type']");
    setReactData("input[name='startDate']", "change", "05/08/2020");
    setRadioInput("input[name='furnishing']");
    setReactData(
      "input[name='summary']",
      "change",
      "A lovely one bedroom flat!"
    );
    setTextarea(
      "textarea[name='description']",
      "change",
      "Two bedroom apartment is located next to the Battersea park, close to Thames river. Apartment is partially furnished and is located on the 5th floor with beautiful views over the river and comprises of 2 large double ensuite bedrooms. Tube station is located only 5min walk from the apartment and bus station is just outside the entrance to the building."
    );
  }
  function runTenancyScript() {
    setReactData("input[name='monthlyRent.amount']", "change", "1000");
    setReactData("input[name='securityDeposit.amount']", "change", "1153.84");
    setReactData("input[name='holdingDeposit.amount']", "change", "230.76");
    setReactSelectData("div[name='rentFrequency']", "change", "Month");
    setReactSelectData("div[name='prefContractLength']", "change", "12");
  }

  function runReferenceScript() {
    const buttonTags = document.querySelectorAll("button");
    buttonTags.forEach((buttonTag) => {
      buttonTag.addEventListener("click", scriptChecker);
    });
    const aTags = document.querySelectorAll("a");
    aTags.forEach((aTag) => {
      aTag.addEventListener("click", scriptChecker);
    });
    window.addEventListener("popstate", scriptChecker);

    setReactSelectData("div[name='title']", "change", "mr");
    setReactSelectData("div[name='gender']", "change", "male");
    setReactSelectData("div[name='martialStatus']", "change", "single");
    setReactSelectData("div[name='nationality']", "change", "united kingdom");
    setReactSelectData(
      "div[name='postTenancyAddress.country']",
      "change",
      "united kingdom"
    );
    setReactSelectData(
      "div[name='kin.address.country']",
      "change",
      "united kingdom"
    );
    setReactData("input[name='firstname']", "change", "John");
    setReactData("input[name='lastname']", "change", "Smith");
    setReactData("input[name='dateOfBirth']", "change", "05/08/1998");
    setReactData("input[name='nationality']", "change", "DZ");
    setReactData("input[name='phone']", "change", "+441632960845");
    setReactData("input[name='dependants']", "change", "0");
    setReactData(
      "input[name='postTenancyAddress.postcode']",
      "change",
      "SW2 1AU"
    );
    setReactData(
      "input[name='postTenancyAddress.streetNumber']",
      "change",
      "35"
    );
    setReactData(
      "input[name='postTenancyAddress.street']",
      "change",
      "Talma Rd"
    );
    setReactData("input[name='postTenancyAddress.town']", "change", "London");
    setReactData("input[name='postTenancyAddress.country']", "change", "GB");
    setReactData("input[name='kin.address.postcode']", "change", "SW2 1AU");
    setReactData("input[name='kin.address.streetNumber']", "change", "35");
    setReactData("input[name='kin.address.street']", "change", "Talma Rd");
    setReactData("input[name='kin.address.town']", "change", "London");
    setReactData("input[name='kin.address.country']", "change", "GB");
    setReactData("input[name='kin.name']", "change", "Bill");
    setReactData("input[name='kin.relationship']", "change", "Father");
    setReactData("input[name='kin.email']", "change", "bill.smith@gmail.com");
    setReactData("input[name='kin.phone']", "change", "+441632960176");
  }

  function runResidentialScript() {
    const buttonTags = document.querySelectorAll("button");
    buttonTags.forEach((buttonTag) => {
      buttonTag.addEventListener("click", scriptChecker);
    });
    const aTags = document.querySelectorAll("a");
    aTags.forEach((aTag) => {
      aTag.addEventListener("click", scriptChecker);
    });
    window.addEventListener("popstate", scriptChecker);

    setReactSelectData(
      "div[name='locations[0].address.country']",
      "change",
      "united kingdom"
    );
    setReactSelectData(
      "div[name='locations[0].status']",
      "change",
      "living with fam"
    );
    setReactData(
      "input[name='locations[0].address.postcode']",
      "change",
      "SW2 1AU"
    );
    setReactData(
      "input[name='locations[0].address.streetNumber']",
      "change",
      "35"
    );
    setReactData(
      "input[name='locations[0].address.street']",
      "change",
      "Talma Rd"
    );
    setReactData("input[name='locations[0].address.town']", "change", "London");
    setReactData("input[name='locations[0].address.country']", "change", "GB");
    setReactData(
      "input[name='locations[0].livedFor.from']",
      "change",
      "05/08/1998"
    );
  }

  function runEmploymentScript() {
    const buttonTags = document.querySelectorAll("button");
    buttonTags.forEach((buttonTag) => {
      buttonTag.addEventListener("click", scriptChecker);
    });
    const aTags = document.querySelectorAll("a");
    aTags.forEach((aTag) => {
      aTag.addEventListener("click", scriptChecker);
    });
    window.addEventListener("popstate", scriptChecker);

    setReactSelectData("div[name='currentIncomeStatus']", "change", "employed");
    setReactData(
      "input[name='currentEmployment.staffPayrollNo']",
      "change",
      "123456"
    );
    setReactSelectData(
      "div[name='currentEmployment.employment.type']",
      "change",
      "permanent"
    );
    setReactData(
      "input[name='currentEmployment.employment.companyName']",
      "change",
      "Bettr"
    );
    setReactData(
      "input[name='currentEmployment.employment.landline']",
      "change",
      "07123456789"
    );
    setReactData(
      "input[name='currentEmployment.employment.annually.amount']",
      "change",
      "30000"
    );
    setReactData(
      "input[name='currentEmployment.employment.position']",
      "change",
      "Front end developer"
    );
    setReactData(
      "input[name='currentEmployment.employment.commencement']",
      "change",
      "16/08/2018"
    );
    setReactData(
      "input[name='currentEmployment.employment.address.postcode']",
      "change",
      "SW1V 3QR"
    );
    setReactData(
      "input[name='currentEmployment.employment.address.streetNumber']",
      "change",
      "63"
    );
    setReactData(
      "input[name='currentEmployment.employment.address.street']",
      "change",
      "St.George's Square"
    );
    setReactData(
      "input[name='currentEmployment.employment.address.town']",
      "change",
      "London"
    );
    setReactSelectData(
      "div[name='currentEmployment.employment.address.country']",
      "change",
      "united kingdom"
    );
    setReactData(
      "input[name='currentEmployment.employment.employer.name']",
      "change",
      "Leam"
    );
    setReactData(
      "input[name='currentEmployment.employment.employer.surname']",
      "change",
      "Lane"
    );
    setReactData(
      "input[name='currentEmployment.employment.employer.positionAtCompany']",
      "change",
      "CTO"
    );
    setReactData(
      "input[name='currentEmployment.employment.employer.email']",
      "change",
      "Leam@bettr.com"
    );
  }

  window.addEventListener("click", scriptChecker);
})();
