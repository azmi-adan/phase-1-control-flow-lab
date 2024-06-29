// 1. scuberGreetingForFeet
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// 2. ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// 3. switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Example usage
console.log(scuberGreetingForFeet(300)); // Output: "This one is on me!"
console.log(ternaryCheckCity("NYC")); // Output: "Ok, sounds good."
console.log(switchOnCharmFromTip("generous")); // Output: "Thank you so much."
