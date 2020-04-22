import React, { useState, useEffect, useRef } from 'react';
import styles from './user.module.scss';
import { EditUserModal } from './EditUserModal';
import { Space, Button, Form, Input, Select, Table, Popconfirm } from 'antd';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';

const { Option } = Select;

export const User = () => {
  const editUserModal = useRef(null);

  const columns = [
    {
      title: '用户账号',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
    },
    {
      title: '用户名称',
      dataIndex: 'username',
      key: 'username',
      align: 'center',
    },
    {
      title: '会员折扣',
      dataIndex: 'discount',
      key: 'discount',
      align: 'center',
    },
    {
      title: '账户余额',
      dataIndex: 'balance',
      key: 'balance',
      align: 'center',
    },
    {
      title: '总计消费',
      dataIndex: 'total',
      key: 'total',
      align: 'center',
    },
    {
      title: '状态',
      key: 'status',
      align: 'center',
      render: (text) => <span>{text.status === '0' ? '未激活' : '激活'}</span>,
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      key: 'remarks',
      align: 'center',
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <div>
          <Space size="middle">
            <Button
              type="primary"
              size="small"
              onClick={() => {
                editRecord(text);
              }}
            >
              编辑
            </Button>
            <Popconfirm
              placement="topRight"
              title="是否确定删除本条充值记录"
              onConfirm={() => {
                delRecord(text);
              }}
              okText="确定"
              cancelText="取消"
            >
              <Button type="danger" size="small">
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      ),
    },
  ];
  const dataSource = [
    {
      id: '2',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      total: '1000',
      remarks: '现金',
      status: '0',
    },
    {
      id: '2',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      total: '1000',
      remarks: '现金',
      status: '0',
    },
    {
      id: '2',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      total: '1000',
      remarks: '现金',
      status: '0',
    },
    {
      id: '2',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      total: '1000',
      remarks: '现金',
      status: '0',
    },
  ];
  const [tableData, setData] = useState([
    {
      id: '2',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      createDate: '1000',
      remarks: '现金',
    },
    {
      id: '3',
      phone: '13308041085',
      username: '蛋糕',
      discount: '0.8',
      amount: '100',
      balance: '20',
      createDate: '1000',
      remarks: '现金',
    },
  ]);
  const [search_form] = Form.useForm();
  const pagination = {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSizeOptions: ['5', '10', '20', '30'],
    showTotal: (total, range) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条';
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 500,
  };
  //点击用户充值
  const addCharge = () => {
    editUserModal.current.add();
  };
  //编辑用户信息
  const editRecord = (params) => {
    editUserModal.current.edit(params);
  };
  //删除该条充值记录
  const delRecord = (params) => {
    console.log(params);
  };
  // 查询
  const getSearch = () => {
    console.log(search_form.getFieldsValue());
  };
  // 重置
  const getResetting = () => {
    search_form.resetFields();
    console.log(search_form.getFieldsValue());
  };

  return (
    <div className={styles.main}>
      <div className={styles.func_wrap}>
        <Space size="middle">
          <Button type="primary" onClick={addCharge} icon={<PlusOutlined />}>
            新建会员
          </Button>
          <Button icon={<DownloadOutlined />}>导出表单</Button>
        </Space>
      </div>
      <div className={styles.search_wrap}>
        <Form form={search_form} initialValues={{}} layout="inline">
          <Form.Item label="用户账号" name="phone">
            <Input placeholder="请输入" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="会员折扣" name="username">
            <Input placeholder="请输入" style={{ width: 120 }} />
          </Form.Item>
          <Form.Item label="状态" name="status">
            <Select style={{ width: 100 }} placeholder="请选择">
              <Option value="1">激活</Option>
              <Option value="0">未激活</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{ marginRight: 18 }} onClick={getSearch}>
              查询
            </Button>
            <Button onClick={getResetting}>重置</Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.table_wrap}>
        <Table rowKey="id" size="middle" columns={columns} dataSource={tableData} pagination={pagination} />
      </div>
      <EditUserModal ref={editUserModal} />
    </div>
  );
};
