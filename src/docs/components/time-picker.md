---
sidebarDepth: 0
---

# Time Picker

`<TimePicker>` is a UI component that lets users select time.

<DocExampleBox codeBox="https://codesandbox.io/s/jvpprv63n5">
```html
<TimePicker :hour="selectedHour" :minute="selectedMinute" />
```
<TimePickerDoc />
</DocExampleBox>

`<TimePicker>` provides two-way data binding using v-model.

```html
<TimePicker v-model="selectedTime" />
```

## Props

| Name           | Type    | Default | Web | Mobile |
| -------------- | ------- | ------- | --- | ------ |
| hour           | Number  |         | ✔   | ✔      |
| minute         | Number  |         | ✔   | ✔      |
| time           | Date    | Now     | ✔   | ✔      |
| minHour        | Number  |         | ✔   | ✔      |
| maxHour        | Number  |         | ✔   | ✔      |
| minMinute      | Number  |         | ✔   | ✔      |
| maxMinute      | Number  |         | ✔   | ✔      |
| minuteInterval | Boolean |         | ✘   | ✔      |

## Events

| Name       | Web | Mobile |
| ---------- | --- | ------ |
| timeChange | ✔   | ✔      |

## References

> For more information about the available properties, methods, or events head over to the complete [NativeScript-Vue Documentation](https://nativescript-vue.org/en/docs/elements/components/time-picker/)
> or [NativeScript Documentation](https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker)
