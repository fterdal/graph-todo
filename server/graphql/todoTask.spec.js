'use strict';

const graphql = require('graphql');
const chai = require('chai');

const todoTask = require('./todoTask');

const todoTaskType = todoTask.type;
const expect = chai.expect;

describe('Todo Task', () => {
  // Tests
  it('is a passing test', () => {
    expect(false);
  });

  it('is a failing test', () => {
    expect(false).to.equal(true);
  });
});
