<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-on="$listeners"
      v-bind="$attrs"
    >
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          {{ scope.$index + (params.page - 1) * params.pageSize + 1 }}
        </template>
      </el-table-column>
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
      class=" mt20 pagination"
      background
      align="right"
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
