<template>
  <div class="code"> 
    <ul class="list pa2">
    	<li class="item f6" v-for="item in items" :key="item.id">
        <div class="score">
          {{item.score}}
        </div>
        <div class="title">
          {{item.title}}
          <template v-if="item.url">
            <a class="f7" :href="item.url">{{item.url | hostname}}</a>
          </template>
        </div>
        <div class="details">
          <nuxt-link :to="'/user/' + item.by" >{{item.by}}</nuxt-link>
          by {{item.by}} 
          <p class="ma0 i f7">{{item.time | timeSince}} ago </p>
        </div>
        <template v-if="item.descendants">
          <div class="comments">
            {{item.descendants}} comment(s)
          </div>
        </template>
      </li>
	</ul>
  </div>
</template>
<script type="text/javascript">
	import {mapState} from "vuex"
	export default {
		computed: mapState([
      "items"
		])
	}
</script>
<style scoped>
  .item {
    display: grid;
    grid: repeat(4, 1.5em) / repeat(10, 1fr);
    grid-row-gap: 1em;
  }
  .score {
    grid-row: 1 / -1;
    grid-column: span 1;
    align-self: center;
    justify-self: center;
  }
  .title {
    grid-row: 1 / 3;
    grid-column: 2 / -2;
    align-self: end;
  }

  .comments {
    grid-row: 3 / -1;
    grid-column: 2 / 6;
  }
  .details {
    grid-row: 3 / -1;
    grid-column: 6 / -2;
    justify-self: end;
  }
</style>