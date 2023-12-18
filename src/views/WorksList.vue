<template>
  <div class="table talbe-stripe">
    <h1 class="pb-3">콤포넌트 리스트</h1>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>번호</th>
          <th>콤포넌트</th>
          <th>타입</th>

          <th>작업일</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in projects" :key="index" @click="golink(item.link)" style="cursor: pointer">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.workday }}</td>
          <td>{{ item.remark }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "인풋박스",
          type: "인풋",
          workday: "",
          remark: "",
          link: "form",
        },
        {
          title: "버튼",
          type: "버튼",
          workday: "",
          remark: "",
          link: "button",
        },
        {
          title: "카드",
          type: "카드",
          workday: "",
          remark: "",
          link: "card",
        },
        {
          title: "뷰",
          type: "부",
          workday: "",
          remark: "",
          link: "view",
        },
        {
          title: "탭",
          type: "탭",
          workday: "",
          remark: "",
          link: "tabs",
        },
        {
          title: "스와이퍼",
          type: "스와이퍼",
          workday: "",
          remark: "",
          link: "swiper",
        },
        {
          title: "리스트",
          type: "리스트",
          workday: "",
          remark: "",
          link: "list",
        },
      ],
    };
  },
  methods: {
    golink(link) {
      this.$router.push(link);
    },
  },
};
</script>
