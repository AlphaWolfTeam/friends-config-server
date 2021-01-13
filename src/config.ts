export const uiConfiguation = {
  roles: {
    member_role_value: process.env.MEMBER_ROLE_VALUE || 0,
    modifier_role_value: process.env.MODIFIER_ROLE_VALUE || 1,
    manager_role_value: process.env.MANAGER_ROLE_VALUE || 2,
  },
  length_limitations: {
    min_length_group_name: process.env.MIN_GROUP_NAME_LENGTH || 2,
    min_length_tag: process.env.MIN_TAG_LENGTH || 2,
    min_length_user_search_value: process.env.MIN_USER_SEARCH_VALUE || 2,
  },
  token_name: process.env.AUTH_SERVICE_TOKEN || 'friendsToken',
};

export const server = {
  port: process.env.PORT || '8000',
};
