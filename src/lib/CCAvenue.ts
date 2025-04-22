import { createHash, createCipheriv, createDecipheriv } from 'crypto';

// Define types for options and parameters
interface CCavenueOptions {
  working_key?: string;
  merchant_id?: string;
  [key: string]: string | undefined;
}

interface OrderParams {
  [key: string]: string | number | boolean;
}

interface CCavenueResponse {
  [key: string]: string;
}

let initOptions: CCavenueOptions = {};

class Configure {
  constructor(options?: CCavenueOptions) {
    initOptions = options || {};
  }

  validate(key: string): boolean {
    return initOptions && initOptions[key] ? true : false;
  }

  throwError(requirement: string): never {
    throw new Error(`${requirement} is required to perform this action`);
  }

  encrypt(plainText: string): string {
    if (this.validate('working_key') && plainText) {
      const { working_key } = initOptions;
      const m = createHash('md5');
      m.update(working_key as string);
      const key = m.digest();
      const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
      // @ts-ignore
      const cipher = createCipheriv('aes-128-cbc', key, iv);
      let encoded = cipher.update(plainText, 'utf8', 'hex');
      encoded += cipher.final('hex');
      return encoded;
    } else if (!plainText) {
      return this.throwError('Plain text');
    } else {
      return this.throwError('Working Key');
    }
  }

  decrypt(encText: string): string {
    if (this.validate('working_key') && encText) {
      const { working_key } = initOptions;
      const m = createHash('md5');
      m.update(working_key as string);
      const key = m.digest();
      const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
      // @ts-ignore

      const decipher = createDecipheriv('aes-128-cbc', key, iv);
      let decoded = decipher.update(encText, 'hex', 'utf8');
      decoded += decipher.final('utf8');
      return decoded;
    } else if (!encText) {
      return this.throwError('Encrypted text');
    } else {
      return this.throwError('Working Key');
    }
  }

  redirectResponseToJson(response: string): CCavenueResponse {
    if (response) {
      let ccavResponse = this.decrypt(response);
      const responseArray = ccavResponse.split('&');
      const stringify = JSON.stringify(responseArray);
      const removeQ = stringify.replace(/['"]+/g, '');
      const removeS = removeQ.replace(/[[\]]/g, '');
      return removeS.split(',').reduce<CCavenueResponse>((o, pair) => {
        const parts = pair.split('=');
        if (parts.length === 2) {
          o[parts[0]] = parts[1];
        }
        return o;
      }, {});
    } else {
      return this.throwError('CCAvenue encrypted response');
    }
  }

  getEncryptedOrder(orderParams: OrderParams): string {
    if (this.validate('merchant_id') && orderParams) {
      let data = `merchant_id=${initOptions.merchant_id}`;
      data += Object.entries(orderParams)
        .map(([key, value]) => `&${key}=${value}`)
        .join('');
      return this.encrypt(data);
    } else if (!orderParams) {
      return this.throwError('Order Params');
    } else {
      return this.throwError('Merchant ID');
    }
  }
}

const CCAvenue = new Configure({
  working_key: '11AAE061E99566EDC9170266EF91E8D4', // Your Working Key from CCAvenue
  merchant_id: '2492757', // Your Merchant ID from CCAvenue
});

export default CCAvenue;
