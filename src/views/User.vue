<template>
  <div class="user">
    <template v-if="!loaded">
      Загрузка...
    </template>
    <h2>getUserInfo</h2>
    {{ userInfo }}
    <br>
    <br>
    <br>
    <br>
    <h2>getUserInfo</h2>
    {{ userFeed }}
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import NewsCard from '@/components/NewsCard.vue';

    @Component({
        components: {
            NewsCard,
        },
    })
    export default class News extends Vue {
        private userInfo: object = [];
        private userFeed: object = [];
        private loaded: boolean =  false;

        private async getUserInfo() {
            try {
                const {data} = await this.$axios({
                    method: 'GET',
                    url: `/user/info/${this.$route.params.name}`,
                });
                this.userInfo = data;
            } catch (e) {
                console.log('Ошибочка');
            }
        }

        private async getUserFeed() {
            try {
                const {data} = await this.$axios({
                    method: 'GET',
                    url: `/user/feed/${this.$route.params.name}`,
                });
                this.userFeed = data;
            } catch (e) {
                console.log('Ошибочка');
            }
        }

        private created(): void {
            Promise.all([this.getUserInfo(), this.getUserFeed()]).then(() => {
                this.loaded = true;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
