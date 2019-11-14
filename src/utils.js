export function normalizeOptions(options) {
    const normalized = {}
    Object.entries(options).forEach(([key, [value, description]]) => {
        if (Array.isArray(value))
            normalized[key] = { value: value[0], type: 'array', default: value[0], options: value, description }
        else if (typeof value === "boolean")
            normalized[key] = { value, type: 'bool', default: value, description }
        else if (typeof value === "string")
            normalized[key] = { value, type: 'string', default: value, description }
    })
    return normalized
}

export function getDefaultOptions (options){
    const defaults = {}
    Object.entries(options).forEach(([key,value]) => {
        defaults[key] = value.default
    })
    return defaults
}

export function diffedFromDefaults(config, options) {
    const diffed = {}
    Object.entries(config).forEach(([key, value]) => {
        if (options[key].default !== value)
            diffed[key] = value
    })
    return diffed
}