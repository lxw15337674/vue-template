<template>
  <div>
    <div class="filter-content">
      <div v-for="item in searchList" :key="item.key">
        <label>{{ item.label }}</label>
        <el-input
          size="small"
          class="search-input"
          v-model="item.key"
          :placeholder="`${item.label}查询`"
        ></el-input>
      </div>
      <!--      <div class="fr">-->
      <!--        <div class="rank">-->
      <!--          -->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="col in tableCols"
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
        :key="col.prop"
      ></el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    searchList: {
      type: Array,
      default: function() {
        return [];
      },
    },
    orderList: {
      type: Array,
      default: function() {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      },
    },
    tableCols: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  // $attrs/$listeners
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
.filter-content
  display flex
  align-items center
  .search-input
    display inline-block
    width 200px
    padding 0 12px
</style>
