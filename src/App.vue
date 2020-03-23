<template>
  <div>
    <c-table
      :tableData="tableData.dataList"
      :tableCols="tableCols"
      :searchList="searchList"
      :orderList="orderList"
    ></c-table>
  </div>
</template>

<script>
import cTable from 'src/components/custome-table';
export default {
  name: 'app',
  components: { cTable },
  data() {
    return {
      searchList: [
        {
          label: '标题',
          key: 'keywords',
        },
      ],
      orderList: [{}],
      tableData: [],
      tableCols: [
        { prop: 'title', label: '标题', width: '120' },
        { prop: 'department', label: '所属部门', width: '120' },
        { prop: 'remark', label: '描述' },
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.tableData = await this.$post(
        'https://117.159.24.209:30377/rc/catalog/dataCatalogSearch',
        {
          page: 1,
          pageSize: 10,
          orderField: 'updateTime.keyword',
          dir: 'desc',
          keywords: '',
          type: 'catalog',
          resourceType: 'all',
        },
      );
    },
  },
};
</script>
<style lang="stylus" scoped></style>
