import types from './types';
import scopes from './scopes';
import messages from './messages';
module.exports = {
  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: true,
  // 区域
  scopes,
  // 提交类型
  types,
  // 消息步骤
  messages,
  // 跳过问题
  // skipQuestions: ['body', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72,
};
