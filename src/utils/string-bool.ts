function stringBool(value: unknown) {
  if (typeof value !== "string") {
    return false;
  }
  return value === "true";
}

export default stringBool;
