import React from 'react';

import CrudModule from '@/modules/CrudModule';
import LeadCreationForm from '@/forms/LeadCreationForm';

function Leads() {
  const entity = 'lead';
  const searchConfig = {
    displayLabels: ['leads'],
    searchFields: 'organization,dealer,territory',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['lead'];

  const readColumns = [
    {
      title: 'Lead Id',
      dataIndex: 'leadId',
    },
    {
      title: 'Organization',
      dataIndex: 'Organization',
    },
    {
      title: 'Contact Person Name',
      dataIndex: 'contactPersonName',
    },
    {
      title: 'Lead Owner',
      dataIndex: 'leadOwner',
    },
    {
      title: 'Dealer',
      dataIndex: 'dealer',
    },
    {
      title: 'Last Update',
      dataIndex: 'lastUpdate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const dataTableColumns = [
    {
      title: 'Lead Id',
      dataIndex: 'leadId',
    },
    {
      title: 'Organization',
      dataIndex: 'organizationName',
    },
    {
      title: 'Contact Person Name',
      dataIndex: 'contactPersonName',
    },
    {
      title: 'Lead Owner',
      dataIndex: 'leadName',
    },
    {
      title: 'Dealer',
      dataIndex: 'dealer',
    },
    {
      title: 'Last Update',
      dataIndex: 'lastUpdate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const ADD_NEW_ENTITY = 'Add new Lead';
  const DATATABLE_TITLE = 'Leads List';
  const ENTITY_NAME = 'lead';
  const CREATE_ENTITY = 'Create Lead';
  const UPDATE_ENTITY = 'Update Lead';
  const PANEL_TITLE = 'Lead Panel';

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
    <CrudModule
      createForm={<LeadCreationForm />}
      updateForm={<LeadCreationForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Leads;
