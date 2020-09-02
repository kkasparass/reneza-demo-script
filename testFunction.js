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
    const element = document.querySelector(selector).previousElementSibling
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

  setReactSelectData("input[name='rentFrequency']", "change", "Month");
  setReactSelectData("input[name='prefContractLength']", "change", "12");
})();
