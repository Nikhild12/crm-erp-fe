import React from 'react';

// import CrudModule from '@/modules/CrudModule';
// import OrdersForm from '@/forms/OrdersForm';
// import OrderModule from '@/modules/OrdersCrudModule/OrdersDataTable';
import OrdersForm from '@/forms/OrdersForms';
import OrdersModule from '@/modules/OrdersCrudModule';

function Order() {
  const entity = 'client';
  const searchConfig = {
    displayLabels: ['company'],
    searchFields: 'company,managerSurname,managerName',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['company'];

  const readColumns = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Manager Surname',
      dataIndex: 'managerSurname',
    },
    {
      title: 'Manager Name',
      dataIndex: 'managerName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
  ];
  const dataTableColumns = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Manager Surname',
      dataIndex: 'managerSurname',
    },
    {
      title: 'Manager Name',
      dataIndex: 'managerName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const ADD_NEW_ENTITY = 'Create New Order';
  const DATATABLE_TITLE = 'Orders List';
  const ENTITY_NAME = 'Orders';
  const CREATE_ENTITY = 'Create Order';
  const UPDATE_ENTITY = 'Update Order';
  const PANEL_TITLE = 'Orders Panel';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <OrdersModule
      createForm={<OrdersForm />}
      updateForm={<OrdersForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Order;
