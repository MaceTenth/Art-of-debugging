const getDuration = require("../getDurationImproved.js");

describe('getDuration function', () => {
  
    test('should return correct seconds for valid duration', () => {
      expect(getDuration("1D2H3M4S")).toBe(93784);
      expect(getDuration("2H")).toBe(7200);
      expect(getDuration("5M")).toBe(300);
      expect(getDuration("10S")).toBe(10);
      expect(getDuration("1D")).toBe(86400);
    });
  
    test('should throw error for invalid duration format', () => {
      expect(() => getDuration("1D2H3M4X")).toThrow('Invalid ISO 8601 duration format.');
      expect(() => getDuration("2H3M5D")).toThrow('Invalid ISO 8601 duration format.');
      expect(() => getDuration("5M2H")).toThrow('Invalid ISO 8601 duration format.');
      expect(() => getDuration("123")).toThrow('Invalid ISO 8601 duration format.');
    });
  
    test('should throw error for non-string input', () => {
      expect(() => getDuration(123)).toThrow('Invalid ISO 8601 duration format.');
      expect(() => getDuration(null)).toThrow('Invalid ISO 8601 duration format.');
      expect(() => getDuration({})).toThrow('Invalid ISO 8601 duration format.');
    });
    
  });