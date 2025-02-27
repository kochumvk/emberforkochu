/* eslint-disable qunit/no-test-expect-argument */
import { dasherize } from '@ember/string';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

function test(assert, given, expected, description) {
  expectDeprecation(() => {
    assert.deepEqual(dasherize(given), expected, description);
  }, 'Importing from `@ember/string` without having the `@ember/string` package in your project is deprecated. Please add `@ember/string` to your `package.json');
}

moduleFor(
  'EmberStringUtils.dasherize',
  class extends AbstractTestCase {
    ['@test String dasherize tests'](assert) {
      test(assert, 'my favorite items', 'my-favorite-items', 'dasherize normal string');
      test(assert, 'css-class-name', 'css-class-name', 'does nothing with dasherized string');
      test(assert, 'action_name', 'action-name', 'dasherize underscored string');
      test(assert, 'innerHTML', 'inner-html', 'dasherize camelcased string');
      test(
        assert,
        'toString',
        'to-string',
        'dasherize string that is the property name of Object.prototype'
      );
      test(
        assert,
        'PrivateDocs/OwnerInvoice',
        'private-docs/owner-invoice',
        'dasherize namespaced classified string'
      );
      test(
        assert,
        'privateDocs/ownerInvoice',
        'private-docs/owner-invoice',
        'dasherize namespaced camelized string'
      );
      test(
        assert,
        'private_docs/owner_invoice',
        'private-docs/owner-invoice',
        'dasherize namespaced underscored string'
      );
    }
  }
);
