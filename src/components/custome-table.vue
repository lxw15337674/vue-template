<template>
  <div>
    <!--    <div class="filter-content">-->
    <!--      <div v-for="item in searchList" :key="item.key">-->
    <!--        <label>{{ item.label }}</label>-->
    <!--        <el-input-->
    <!--          @input="(val) => searchInput(item.key, val)"-->
    <!--          suffix-icon="el-icon-search"-->
    <!--          size="small"-->
    <!--          class="search-input"-->
    <!--          clearable-->
    <!--          maxlength="20"-->
    <!--          :placeholder="`${item.label}查询`"-->
    <!--        ></el-input>-->
    <!--      </div>-->
    <!--      <div class="fr">-->
    <!--        <div class="rank">-->
    <!--          -->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
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
      class="fr mt20 pagination"
      background
      :current-page="params.page"
      :page-sizes="[5, 10, 20]"
      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="(val) => setParams('pageSize', val)"
      @current-change="(val) => setParams('page', val)"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    setParams: {
      required: true,
      type: Function,
    },
    params: {
      required: true,
      type: Object,
    },
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
    total: {},
  },
  data() {
    return {};
  },
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
