<template>
  <div id="tabmenu" class="p-5">
    <div>
      <div class="header-box">상단메뉴 영역</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est nulla. Vivamus at semper elit. Quisque dictum malesuada enim, id dignissim eros commodo sit amet. Sed molestie sem id feugiat commodo. Cras eget est placerat, semper lorem id, blandit velit. Pellentesque aliquet ligula venenatis erat venenatis cursus. Praesent lorem turpis, ultrices vitae pulvinar sed, tempor at orci.
        Pellentesque venenatis magna et ipsum pretium tempor. Quisque eu finibus tellus. Aenean nec dignissim neque, eu fermentum metus. Vestibulum eleifend lobortis ipsum et auctor. Vestibulum convallis, metus vitae molestie imperdiet, est lectus lacinia arcu, a imperdiet nulla massa eu lorem. Phasellus dui nunc, luctus pharetra vulputate ac, consequat in justo. In libero mi, faucibus imperdiet
        diam nec, euismod dapibus leo. Aliquam sit amet nibh sit amet velit malesuada mollis. Vestibulum et eros lectus. Morbi risus tellus, tempor at metus a, dapibus facilisis risus. Nam scelerisque ex dictum dolor ultricies, non maximus dui convallis. Cras luctus mauris nec ultrices feugiat. Nulla rhoncus nisi eros, et aliquet diam sodales at. Integer placerat massa nisl, eleifend feugiat purus
        ultrices ut. In pretium feugiat urna. Proin placerat elit at velit porttitor placerat. Suspendisse potenti. Proin nibh purus, iaculis a consequat in, tincidunt eu ligula. Vestibulum bibendum, leo nec ultrices euismod, tellus libero vehicula mi, a vulputate mi eros et turpis. Vestibulum euismod libero est, sagittis vulputate metus tempor in. Nullam quis dolor nec enim laoreet tempus et eget
        enim. Pellentesque vel facilisis enim, sit amet dapibus dui. Proin sed efficitur orci. Integer nec nibh tempus ante pharetra semper a eu massa. Mauris nec placerat orci, vel vulputate odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in justo aliquet, aliquam sapien eu, luctus arcu. Morbi volutpat, augue sed bibendum lobortis, mi tellus
        vestibulum ipsum, eleifend semper elit urna vitae sapien. Ut ut pellentesque nisl. Vestibulum imperdiet ipsum id porta semper. Maecenas et euismod nisl. Donec nibh ligula, tempus vel laoreet vel, vulputate nec tellus. Morbi nec nibh vulputate leo consectetur elementum eu in diam. Pellentesque vitae lacus vitae turpis bibendum posuere. Proin venenatis suscipit magna sit amet ullamcorper.
        Pellentesque ultricies mattis tortor. Duis vel quam at lacus convallis aliquet non quis erat. Aliquam erat volutpat. Quisque fermentum mauris eleifend erat pretium, lacinia rutrum ex semper. Vivamus lobortis turpis quis ultricies consectetur. Cras luctus finibus odio, iaculis congue odio sagittis vel. Curabitur sed maximus nisi, ac dictum mi. Nam feugiat augue sed tellus vulputate
        placerat. Sed posuere neque quam, nec auctor turpis malesuada sed. Nulla suscipit pellentesque consequat. Integer et nunc quis eros elementum sodales id nec ante. Sed fringilla sollicitudin velit non egestas. Quisque vulputate tellus vitae tellus faucibus, vel hendrerit sapien condimentum. Aliquam viverra id nisi at suscipit. Etiam accumsan mollis magna, eu ornare nunc. Phasellus iaculis
        tortor vitae sollicitudin hendrerit. Mauris maximus dolor quis nibh vestibulum condimentum. Aliquam non quam sodales, aliquet dui sed, suscipit ipsum. Maecenas quis consectetur odio.
      </div>
    </div>
    <div style="border: 3px solid red">
      <div class="menu sticky-top d-flex" style="top: 50px">
        <button v-for="tab in tabs" :key="tab.value" @click="changeTab(tab.value)" class="btn btn-primary me-2" :class="{ active: currentTab === tab.value }">
          {{ tab.text }}
        </button>
      </div>

      <div v-for="tab in tabs" :key="tab.value" :id="tab.value" class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est nulla. Vivamus at semper elit. Quisque dictum malesuada enim, id dignissim eros commodo sit amet. Sed molestie sem id feugiat commodo. Cras eget est placerat, semper lorem id, blandit velit. Pellentesque aliquet ligula venenatis erat venenatis cursus. Praesent lorem turpis, ultrices vitae pulvinar sed, tempor at orci.
        Pellentesque venenatis magna et ipsum pretium tempor. Quisque eu finibus tellus. Aenean nec dignissim neque, eu fermentum metus. Vestibulum eleifend lobortis ipsum et auctor. Vestibulum convallis, metus vitae molestie imperdiet, est lectus lacinia arcu, a imperdiet nulla massa eu lorem. Phasellus dui nunc, luctus pharetra vulputate ac, consequat in justo. In libero mi, faucibus imperdiet
        diam nec, euismod dapibus leo. Aliquam sit amet nibh sit amet velit malesuada mollis. Vestibulum et eros lectus. Morbi risus tellus, tempor at metus a, dapibus facilisis risus. Nam scelerisque ex dictum dolor ultricies, non maximus dui convallis. Cras luctus mauris nec ultrices feugiat. Nulla rhoncus nisi eros, et aliquet diam sodales at. Integer placerat massa nisl, eleifend feugiat purus
        ultrices ut. In pretium feugiat urna. Proin placerat elit at velit porttitor placerat. Suspendisse potenti. Proin nibh purus, iaculis a consequat in, tincidunt eu ligula. Vestibulum bibendum, leo nec ultrices euismod, tellus libero vehicula mi, a vulputate mi eros et turpis. Vestibulum euismod libero est, sagittis vulputate metus tempor in. Nullam quis dolor nec enim laoreet tempus et eget
        enim. Pellentesque vel facilisis enim, sit amet dapibus dui. Proin sed efficitur orci. Integer nec nibh tempus ante pharetra semper a eu massa. Mauris nec placerat orci, vel vulputate odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in justo aliquet, aliquam sapien eu, luctus arcu. Morbi volutpat, augue sed bibendum lobortis, mi tellus
        vestibulum ipsum, eleifend semper elit urna vitae sapien. Ut ut pellentesque nisl. Vestibulum imperdiet ipsum id porta semper. Maecenas et euismod nisl. Donec nibh ligula, tempus vel laoreet vel, vulputate nec tellus. Morbi nec nibh vulputate leo consectetur elementum eu in diam. Pellentesque vitae lacus vitae turpis bibendum posuere. Proin venenatis suscipit magna sit amet ullamcorper.
        Pellentesque ultricies mattis tortor. Duis vel quam at lacus convallis aliquet non quis erat. Aliquam erat volutpat. Quisque fermentum mauris eleifend erat pretium, lacinia rutrum ex semper. Vivamus lobortis turpis quis ultricies consectetur. Cras luctus finibus odio, iaculis congue odio sagittis vel. Curabitur sed maximus nisi, ac dictum mi. Nam feugiat augue sed tellus vulputate
        placerat. Sed posuere neque quam, nec auctor turpis malesuada sed. Nulla suscipit pellentesque consequat. Integer et nunc quis eros elementum sodales id nec ante. Sed fringilla sollicitudin velit non egestas. Quisque vulputate tellus vitae tellus faucibus, vel hendrerit sapien condimentum. Aliquam viverra id nisi at suscipit. Etiam accumsan mollis magna, eu ornare nunc. Phasellus iaculis
        tortor vitae sollicitudin hendrerit. Mauris maximus dolor quis nibh vestibulum condimentum. Aliquam non quam sodales, aliquet dui sed, suscipit ipsum. Maecenas quis consectetur odio.
      </div>
    </div>

    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est nulla. Vivamus at semper elit. Quisque dictum malesuada enim, id dignissim eros commodo sit amet. Sed molestie sem id feugiat commodo. Cras eget est placerat, semper lorem id, blandit velit. Pellentesque aliquet ligula venenatis erat venenatis cursus. Praesent lorem turpis, ultrices vitae pulvinar sed, tempor at orci.
      Pellentesque venenatis magna et ipsum pretium tempor. Quisque eu finibus tellus. Aenean nec dignissim neque, eu fermentum metus. Vestibulum eleifend lobortis ipsum et auctor. Vestibulum convallis, metus vitae molestie imperdiet, est lectus lacinia arcu, a imperdiet nulla massa eu lorem. Phasellus dui nunc, luctus pharetra vulputate ac, consequat in justo. In libero mi, faucibus imperdiet
      diam nec, euismod dapibus leo. Aliquam sit amet nibh sit amet velit malesuada mollis. Vestibulum et eros lectus. Morbi risus tellus, tempor at metus a, dapibus facilisis risus. Nam scelerisque ex dictum dolor ultricies, non maximus dui convallis. Cras luctus mauris nec ultrices feugiat. Nulla rhoncus nisi eros, et aliquet diam sodales at. Integer placerat massa nisl, eleifend feugiat purus
      ultrices ut. In pretium feugiat urna. Proin placerat elit at velit porttitor placerat. Suspendisse potenti. Proin nibh purus, iaculis a consequat in, tincidunt eu ligula. Vestibulum bibendum, leo nec ultrices euismod, tellus libero vehicula mi, a vulputate mi eros et turpis. Vestibulum euismod libero est, sagittis vulputate metus tempor in. Nullam quis dolor nec enim laoreet tempus et eget
      enim. Pellentesque vel facilisis enim, sit amet dapibus dui. Proin sed efficitur orci. Integer nec nibh tempus ante pharetra semper a eu massa. Mauris nec placerat orci, vel vulputate odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in justo aliquet, aliquam sapien eu, luctus arcu. Morbi volutpat, augue sed bibendum lobortis, mi tellus
      vestibulum ipsum, eleifend semper elit urna vitae sapien. Ut ut pellentesque nisl. Vestibulum imperdiet ipsum id porta semper. Maecenas et euismod nisl. Donec nibh ligula, tempus vel laoreet vel, vulputate nec tellus. Morbi nec nibh vulputate leo consectetur elementum eu in diam. Pellentesque vitae lacus vitae turpis bibendum posuere. Proin venenatis suscipit magna sit amet ullamcorper.
      Pellentesque ultricies mattis tortor. Duis vel quam at lacus convallis aliquet non quis erat. Aliquam erat volutpat. Quisque fermentum mauris eleifend erat pretium, lacinia rutrum ex semper. Vivamus lobortis turpis quis ultricies consectetur. Cras luctus finibus odio, iaculis congue odio sagittis vel. Curabitur sed maximus nisi, ac dictum mi. Nam feugiat augue sed tellus vulputate placerat.
      Sed posuere neque quam, nec auctor turpis malesuada sed. Nulla suscipit pellentesque consequat. Integer et nunc quis eros elementum sodales id nec ante. Sed fringilla sollicitudin velit non egestas. Quisque vulputate tellus vitae tellus faucibus, vel hendrerit sapien condimentum. Aliquam viverra id nisi at suscipit. Etiam accumsan mollis magna, eu ornare nunc. Phasellus iaculis tortor vitae
      sollicitudin hendrerit. Mauris maximus dolor quis nibh vestibulum condimentum. Aliquam non quam sodales, aliquet dui sed, suscipit ipsum. Maecenas quis consectetur odio.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel est nulla. Vivamus at semper elit. Quisque dictum malesuada enim, id dignissim eros commodo sit amet. Sed molestie sem id feugiat commodo. Cras eget est placerat, semper lorem id, blandit velit. Pellentesque aliquet ligula venenatis erat venenatis cursus. Praesent lorem turpis, ultrices vitae pulvinar sed, tempor at orci.
      Pellentesque venenatis magna et ipsum pretium tempor. Quisque eu finibus tellus. Aenean nec dignissim neque, eu fermentum metus. Vestibulum eleifend lobortis ipsum et auctor. Vestibulum convallis, metus vitae molestie imperdiet, est lectus lacinia arcu, a imperdiet nulla massa eu lorem. Phasellus dui nunc, luctus pharetra vulputate ac, consequat in justo. In libero mi, faucibus imperdiet
      diam nec, euismod dapibus leo. Aliquam sit amet nibh sit amet velit malesuada mollis. Vestibulum et eros lectus. Morbi risus tellus, tempor at metus a, dapibus facilisis risus. Nam scelerisque ex dictum dolor ultricies, non maximus dui convallis. Cras luctus mauris nec ultrices feugiat. Nulla rhoncus nisi eros, et aliquet diam sodales at. Integer placerat massa nisl, eleifend feugiat purus
      ultrices ut. In pretium feugiat urna. Proin placerat elit at velit porttitor placerat. Suspendisse potenti. Proin nibh purus, iaculis a consequat in, tincidunt eu ligula. Vestibulum bibendum, leo nec ultrices euismod, tellus libero vehicula mi, a vulputate mi eros et turpis. Vestibulum euismod libero est, sagittis vulputate metus tempor in. Nullam quis dolor nec enim laoreet tempus et eget
      enim. Pellentesque vel facilisis enim, sit amet dapibus dui. Proin sed efficitur orci. Integer nec nibh tempus ante pharetra semper a eu massa. Mauris nec placerat orci, vel vulputate odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in justo aliquet, aliquam sapien eu, luctus arcu. Morbi volutpat, augue sed bibendum lobortis, mi tellus
      vestibulum ipsum, eleifend semper elit urna vitae sapien. Ut ut pellentesque nisl. Vestibulum imperdiet ipsum id porta semper. Maecenas et euismod nisl. Donec nibh ligula, tempus vel laoreet vel, vulputate nec tellus. Morbi nec nibh vulputate leo consectetur elementum eu in diam. Pellentesque vitae lacus vitae turpis bibendum posuere. Proin venenatis suscipit magna sit amet ullamcorper.
      Pellentesque ultricies mattis tortor. Duis vel quam at lacus convallis aliquet non quis erat. Aliquam erat volutpat. Quisque fermentum mauris eleifend erat pretium, lacinia rutrum ex semper. Vivamus lobortis turpis quis ultricies consectetur. Cras luctus finibus odio, iaculis congue odio sagittis vel. Curabitur sed maximus nisi, ac dictum mi. Nam feugiat augue sed tellus vulputate placerat.
      Sed posuere neque quam, nec auctor turpis malesuada sed. Nulla suscipit pellentesque consequat. Integer et nunc quis eros elementum sodales id nec ante. Sed fringilla sollicitudin velit non egestas. Quisque vulputate tellus vitae tellus faucibus, vel hendrerit sapien condimentum. Aliquam viverra id nisi at suscipit. Etiam accumsan mollis magna, eu ornare nunc. Phasellus iaculis tortor vitae
      sollicitudin hendrerit. Mauris maximus dolor quis nibh vestibulum condimentum. Aliquam non quam sodales, aliquet dui sed, suscipit ipsum. Maecenas quis consectetur odio.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { text: "first", value: "info-first" },
        { text: "second", value: "info-second" },
        { text: "third", value: "info-third" },
        { text: "fourth", value: "info-fourth" },
      ],
      stickyTop: 100,
      currentTab: "info-first",
    };
  },
  methods: {
    changeTab(value) {
      this.currentTab = value;
      const element = document.getElementById(value);
      window.scrollTo({ top: element.offsetTop - this.stickyTop, behavior: "smooth" });
    },
    onScroll() {
      this.tabs.forEach((tab) => {
        const element = document.getElementById(tab.value);
        if (window.scrollY >= element.offsetTop - this.stickyTop) {
          this.currentTab = tab.value;
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeMount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
.content {
  height: auto;
}

.header-box {
  border: 1px solid #000;
  background-color: white;
  padding: 10px 10px;
  position: sticky;
  top: 0;
  left: 0;
}
</style>
