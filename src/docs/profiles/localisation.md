---
title: Localisation
aside: false
---

# Localisation

The localisation section of the profile allows you to translate class names and primitive types for
your users.

It's a simple object where the key is the thing you want to translate and the value is the
translation.

```JSON
"localisation": {
    "Person": "Hombre",
    "Date": "When it happened"
},
```

And in the UI the user would see:

![with localisation](/images/profiles/localisation.png)

Notice an entity of type `Hombre` can be added to the author property and `When it happened` to the
date property - with the date selector being shown.
