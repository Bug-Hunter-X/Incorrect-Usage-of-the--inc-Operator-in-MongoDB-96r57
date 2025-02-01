# Incorrect Usage of the $inc Operator in MongoDB

This example demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment or decrement a numerical field by a specified value. However, if the field being incremented does not exist, it will create the field with the specified value.  This can lead to unexpected results or data corruption if not handled properly.

**Bug:** Incorrectly using `$inc` on a non-existent field can lead to unintended side-effects. This is particularly problematic when dealing with concurrent updates.

**Solution:** Check for field existence before using `$inc`. This prevents accidental field creation and ensures predictable results, even with multiple updates.