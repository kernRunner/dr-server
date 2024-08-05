import type { Schema, Attribute } from '@strapi/strapi';

export interface MetadataMeta extends Schema.Component {
  collectionName: 'components_trmetadata_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keywords: Attribute.Text;
  };
}

export interface TravelInfoInfo extends Schema.Component {
  collectionName: 'components_travel_info_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    hotspot: Attribute.Boolean;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'metadata.meta': MetadataMeta;
      'travel-info.info': TravelInfoInfo;
    }
  }
}
