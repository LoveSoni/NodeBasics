exports.check_string_is_empty = (value) => {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}