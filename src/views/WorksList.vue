<template>
  <div class="table talbe-stripe">
    <pre>
      작성하신 코드에서 projects 배열의 각 아이템에 포함된 meta 객체의 특정 속성을 렌더링하고 싶으신 것 같아요. meta 객체는 배열이 아니라는 점을 고려하면, 
      객체의 키-값 쌍을 반복하기 위해서 v-for를 사용해야 합니다. 그리고 특정 조건 하에서만 값(여기서는 'title' 키에 해당하는 값)을 표시하고자 v-if를 사용하셨어요.

요약하자면:

1.projects 배열의 각 item에는 meta라는 객체가 포함되어 있습니다.
2.meta 객체에서 'title'이라는 키를 가진 값만 화면에 표시하고자 합니다.
3.이를 위해 v-for를 사용하여 meta 객체의 키-값 쌍을 반복합니다.
4.v-if를 사용하여 조건부 렌더링을 적용, 'title' 키를 가진 값만을 표시합니다.
제가 수정해 드린 코드는 이러한 요구사항을 충족하도록 작성되었습니다.
    </pre>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>번호</th>
          <th>콤포넌트</th>
          <!-- <th>타입</th> -->

          <th>작업일</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in projects" :key="index" @click="golink(item.path)" style="cursor: pointer">
          <td>{{ index + 1 }}</td>
          <td>
            <div v-for="(value, key) in item.meta" :key="key">
              <span v-if="value && key === 'title'">{{ value }}</span>
            </div>
          </td>
          <!-- <td>{{ item.type }}</td> -->
          <td>{{ item.workday }}</td>
          <td>{{ item.path }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    golink(link) {
      this.$router.push(link);
    },

    getMeta(metas) {
      return metas;
    },
  },

  mounted() {
    this.projects = this.$router.getRoutes();

    //console.log(this.projects);

    for (const temp of this.projects) {
      //console.log(temp);

      // temp.meta.forEach((target) => {
      //   console.log(target);
      // });

      //const meta = temp.meta;

      this.getMeta(temp.meta);
    }
  },
};
</script>
