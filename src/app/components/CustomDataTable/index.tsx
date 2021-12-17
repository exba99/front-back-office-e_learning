/**
 *
 * CustomDataTable
 *
 */
import { memo } from 'react';
import { Table } from 'antd';
import ImgPrev from './assets/img/keyboard-backspace-24-px-2.svg';
import ImgNext from './assets/img/keyboard-next-24-px-2.svg';

import './assets/css/styles.css';

interface Props {
  columns: object[];
  data: any;
  pageSize?: number;
  loading?: boolean;
}

export const CustomDataTable = memo((props: Props) => {
  const { columns, data, pageSize, loading = false } = props;

  return (
    <Table
      rowKey="id"
      pagination={{
        itemRender,
        position: ['bottomCenter'],
        pageSize: pageSize || 10,
      }}
      columns={columns}
      dataSource={data}
      loading={loading}
      className="custom-datatable"
    />
  );
});

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return (
      <a>
        <img
          src={ImgPrev}
          alt="prev-icon-pagination"
          className="prev-icon-pagination"
        />
        Précédent
      </a>
    );
  }
  if (type === 'next') {
    return (
      <a>
        Suivant
        <img
          src={ImgNext}
          alt="next-icon-pagination"
          className="next-icon-pagination"
        />
      </a>
    );
  }
  return originalElement;
}
