# 5. Are you familiar with PHP deserialisation?

## Serialisation and Deserialisation
Serialisation is the process of converting an object into a string; deserialisation is the reverse process – converting a string back into an object.

## Types
- **Without classes:** If the source code deserialises the input value, one must serialise the data in advance before submitting it.
- **With classes:** Exploitation leverages magic methods. Magic methods function like implicit rules; for instance, when an object is created, `__construct()` is automatically triggered and the code within `__construct()` is executed.
  
**Analogy:** It is like someone calling your girlfriend’s name, and immediately her image appears in your mind without any conscious effort – it is simply an unconscious invocation of a rule.
