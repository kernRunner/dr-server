import type { Schema, Attribute } from '@strapi/strapi';

export interface AffiliateCategoryList extends Schema.Component {
  collectionName: 'components_affiliate_category_lists';
  info: {
    displayName: 'categoryList';
    description: '';
  };
  attributes: {
    category: Attribute.Enumeration<
      [
        'Tours & Activities',
        'Travel Gear & Essentials',
        'Flights & Accommodation',
        'Mobile Connectivity & Travel Technology',
        'Budget Travel & Affordable Deals'
      ]
    >;
  };
}

export interface AffiliateCategory extends Schema.Component {
  collectionName: 'components_affiliate_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    category: Attribute.String;
  };
}

export interface BlogCategory extends Schema.Component {
  collectionName: 'components_blog_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    category: Attribute.Enumeration<
      [
        'Travel Tips',
        'Cultural Awareness',
        'Lifestyle',
        'Health & Wellness',
        'Language & Communication',
        'Environmental Awareness',
        'Travel Philosophy',
        'Personal Growth',
        'Conscious Travel'
      ]
    >;
  };
}

export interface BlogDescription extends Schema.Component {
  collectionName: 'components_blog_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface BlogImage extends Schema.Component {
  collectionName: 'components_blog_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    alt: Attribute.String;
  };
}

export interface BlogTitle extends Schema.Component {
  collectionName: 'components_blog_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

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
      'affiliate.category-list': AffiliateCategoryList;
      'affiliate.category': AffiliateCategory;
      'blog.category': BlogCategory;
      'blog.description': BlogDescription;
      'blog.image': BlogImage;
      'blog.title': BlogTitle;
      'metadata.meta': MetadataMeta;
      'travel-info.info': TravelInfoInfo;
    }
  }
}
