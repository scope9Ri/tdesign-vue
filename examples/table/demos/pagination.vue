<template>
  <div>
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @change="onChange"
      @page-change="onPageChange"
    ></t-table>
  </div>
</template>
<script>
const data = [];
const TOTAL = 60;
for (let i = 0; i < TOTAL; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '共有' : '私有',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      postion: `读取 ${i} 个数据的嵌套信息值`,
    },
    needed: i % 4 === 0 ? '是' : '否',
    description: '数据源',
  });
}
export default {
  data() {
    return {
      data,
      columns: [
        {
          align: 'center',
          width: '100',
          className: 'row',
          colKey: 'index',
          title: '序号',
        },
        {
          width: 100,
          colKey: 'platform',
          title: '平台',
        },
        {
          colKey: 'type',
          title: '类型',
        },
        {
          colKey: 'default',
          title: '默认值',
        },
        {
          colKey: 'needed',
          title: '是否必传',
        },
        {
          colKey: 'detail.postion',
          title: '详情信息',
          width: 200,
          ellipsis: true,
        },
      ],
      /** 非受控用法：与分页组件对齐（此处注释为非受控用法示例，代码有效，勿删） */
      // pagination: {
      //   defaultCurrent: 2,
      //   defaultPageSize: 5,
      //   total: TOTAL,
      //   showJumper: true,
      // },
      /** 受控用法：与分页组件对齐（此处注释为受控用法示例，代码有效，勿删） */
      pagination: {
        current: 1,
        pageSize: 5,
        total: TOTAL,
        showJumper: true,
        // 也可以监听表格组件的 page-change 事件进行处理
        // 还可以使用表格组件的 change 事件处理变化。排序、分页、过滤等发生变化时都会触发 change 事件
        onChange: (pageInfo) => {
          this.pagination.current = pageInfo.current;
          this.pagination.pageSize = pageInfo.pageSize;
        },
      },
    };
  },
  methods: {
    // 分页、排序、过滤等操作触发均会触发 change 事件
    onChange(params, context) {
      console.log('change:', params, context);
    },
    // 分页变化时触发该事件
    onPageChange(pageInfo) {
      console.log('page-change:', pageInfo);
    },
  },
};
</script>
