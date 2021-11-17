<template>
  <div class="news">
    <div class="news__list">
      <template v-if="!loaded">
        Загрузка...
      </template>
      <div
        v-for="(item, index) in news"
        :item="_.get(item, 'id', index)"
        class="news__list-item"
      >
        <NewsCard
          v-bind="item"
        />
      </div>
    </div>
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
        private news: object = [];
        private loaded: boolean =  false;

        private async getNews() {
            this.loaded = false;
            try {
                const {data} = await this.$axios({
                    method: 'GET',
                    url: '/trending/feed',
                });
                this.news = data;
            } catch (e) {
                console.log('Ошибочка');
            } finally {
                this.loaded = true;
            }
        }

        private created(): void {
            this.getNews();
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
