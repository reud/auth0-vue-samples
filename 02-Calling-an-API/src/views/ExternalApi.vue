<template>
  <div>
    <div class="mb-5">
      <h1>ようこそ秘密のページへ</h1>
      <p>
        ここは秘密のページだよ
      </p>

      <button class="btn btn-primary mt-5" @click="callApi">Call API</button>
    </div>

    <div class="result-block-container">
      <div :class="['result-block', executed ? 'show' : '']">
        <h6 class="muted">Result</h6>
        <pre v-highlightjs="JSON.stringify(apiMessage, null, 2)">
          <code class="js rounded"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      apiMessage: null,
      executed: false
    };
  },
  methods: {
    async callApi() {
      const accessToken = await this.$auth.getTokenSilently();
      // eslint-disable-next-line
      console.log(accessToken);
      try {
        const HerokuDomain = 'himitu-api-server';
        const { data } = await this.$http.get(`https://${HerokuDomain}.herokuapp.com/himitu/${this.$auth.user.sub}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        this.apiMessage = data;
        this.executed = true;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    }
  }
};
</script>
