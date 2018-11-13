<template>
    <SegmentedBar>
        <SegmentedBarItem title="Segment 1"/>
        <SegmentedBarItem title="Segment 2"/>
        <SegmentedBarItem title="Segment 3"/>
    </SegmentedBar>
</template>
 
<script>
import { SegmentedBar, SegmentedBarItem } from "nativescript-vue-web";
export default {
  name: "SegmentedBarDoc",
  components: { SegmentedBar, SegmentedBarItem }
};
</script>

