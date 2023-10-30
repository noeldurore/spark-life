/*
   FILENAME: complex_code.js
   DESCRIPTION: This code demonstrates a complex implementation of a home automation system using JavaScript.
*/

// Class to represent a smart device
class SmartDevice {
  constructor(name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.state = false;
  }

  toggleState() {
    this.state = !this.state;
    console.log(`${this.name} is now ${this.state ? 'ON' : 'OFF'}`);
  }
}

// Class to represent a smart thermostat, extends SmartDevice
class SmartThermostat extends SmartDevice {
  constructor(name, powerConsumption, temperature) {
    super(name, powerConsumption);
    this.temperature = temperature;
  }

  adjustTemperature(newTemperature) {
    this.temperature = newTemperature;
    console.log(`${this.name} temperature adjusted to ${this.temperature}°C`);
  }
}

// Class to represent a smart light, extends SmartDevice
class SmartLight extends SmartDevice {
  constructor(name, powerConsumption, brightness) {
    super(name, powerConsumption);
    this.brightness = brightness;
  }

  adjustBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} brightness adjusted to ${this.brightness}%`);
  }
}

// Class to represent a smart security system, extends SmartDevice
class SmartSecuritySystem extends SmartDevice {
  constructor(name, powerConsumption, cameras) {
    super(name, powerConsumption);
    this.cameras = cameras;
  }

  activateAlarm() {
    console.log(`${this.name} alarm activated! Intruder detected.`);
  }

  deactivateAlarm() {
    console.log(`${this.name} alarm deactivated. All clear.`);
  }
}

// Creating instances of the smart devices
const thermostat = new SmartThermostat('Living Room Thermostat', 5, 23);
const light1 = new SmartLight('Living Room Light', 2, 80);
const light2 = new SmartLight('Bedroom Light', 3, 70);
const securitySystem = new SmartSecuritySystem('Home Security', 10, 4);

// Toggling the state of some devices
thermostat.toggleState();
light1.toggleState();
light2.toggleState();
securitySystem.toggleState();

// Adjusting temperature and brightness
thermostat.adjustTemperature(21);
light1.adjustBrightness(50);
light2.adjustBrightness(80);

// Activating and deactivating security system
securitySystem.activateAlarm();
securitySystem.deactivateAlarm();

// ... (more complex code implementation)
// ...

// End of code