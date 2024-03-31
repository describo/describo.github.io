---
title: Identifiers
aside: false
---

# Identifiers in your crate

According to the [JSON-LD spec, IRI's](https://www.w3.org/TR/json-ld11/#iris) should be used to
identify nodes. That said, the spec defines some other types of identifiers that are valid in
JSON-LD but are not valid IRI's.

The
[RO Crate specification](https://www.researchobject.org/ro-crate/1.0/#describing-entities-in-json-ld)
goes further in this regard.

For the sake of validation, this component conforms to both but the SHOULD's in the RO Crate spec
are treated as MUST's.

## What is valid

Here's the
[validateId function](https://github.com/describo/crate-builder-component/blob/revise-internals/src/crate-builder/CrateManager/validate-identifier.js)
with comments explaining what the check is

```JS
export function validateId({ id, type }) {
    if (!id) {
        return { isValid: false };
    }

    // if it's the root descriptor - it's valid
    if (id === "ro-crate-metadata.json") {
        return { isValid: true };
    }

    if (type) {
        // if type matches File or Dataset then whatever is provided is valid
        type = isArray(type) ? type.join(", ") : type;
        if (type.match(/file/i)) return { isValid: true };
        if (type.match(/Dataset/i)) return { isValid: true };
    }

    // if there are spaces in the id - encode them
    if (id.match(/\s+/)) {
        id = id.replace(/\s+/g, "%20");
    }

    // @id is relative
    if (id.match(/^\/.*/)) return { isValid: true };

    // @id starting with . is valid
    if (id.match(/^\..*/)) return { isValid: true };

    // @id starting with # is valid
    if (id.match(/^\#.*/)) return { isValid: true };

    // @id with blank node is valid
    if (id.match(/^\_:.*/)) return { isValid: true };

    // arcp URI's are valid
    if (id.match(/arcp:\/\/name,.*/)) return { isValid: true };
    if (id.match(/arcp:\/\/uuid,.*/)) return { isValid: true };
    if (id.match(/arcp:\/\/ni,sha-256;,.*/)) return { isValid: true };
    // return { isValid: true };

    // otherwise check that the id is a valid IRI
    try {
        let result = validateIriPkg.validateIri(id, validateIriPkg.IriValidationStrategy.Strict);
        if (!result) {
            // it's valid
            return { isValid: true };
        } else if (result?.message?.match(/Invalid IRI according to RFC 3987:/)) {
            // otherwise
            const message = `${result.message.replace(
                /Invalid IRI according to RFC 3987:/,
                "Invalid identifier"
            )}. See https://github.com/describo/crate-builder-component/blob/master/README.identifiers.md for more information.`;
            return { isValid: false, message };
        }
    } catch (error) {
        return { isValid: false };
    }
}

```

## What happens when crates are loaded into the component

Every node is checked for a valid id and if they all are, then the crate is loaded.

As the component is ingesting each of the entities, it checks that it has an @type property and
tries to set it accordingly. To do this it uses the @id of the entity and if it's a URL, then @type
becomes `URL` otherwise @type is set to `Thing`.
