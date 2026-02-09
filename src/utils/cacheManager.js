/**
 * Cache Manager Utility
 * Implements a simple in-memory cache with TTL (Time To Live)
 * 
 * Usage:
 * import { cacheManager } from '../utils/cacheManager';
 * 
 * // Caching API response
 * cacheManager.set('user-list', data, 5 * 60); // 5 minutes
 * 
 * // Retrieve from cache
 * const cached = cacheManager.get('user-list');
 * if (cached) use cached data;
 */

class CacheManager {
  constructor() {
    this.cache = new Map();
  }

  /**
   * Set a value in cache with TTL
   * @param {string} key - Cache key
   * @param {any} data - Data to cache
   * @param {number} ttlSeconds - Time to live in seconds (default: 5 minutes)
   */
  set(key, data, ttlSeconds = 5 * 60) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSeconds * 1000 // Convert to milliseconds
    });
  }

  /**
   * Get a value from cache if it hasn't expired
   * @param {string} key - Cache key
   * @returns {any|null} - Cached data or null if expired/not found
   */
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    // Check if cache has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  /**
   * Check if a key exists and hasn't expired
   * @param {string} key - Cache key
   * @returns {boolean}
   */
  has(key) {
    return this.get(key) !== null;
  }

  /**
   * Remove a specific key from cache
   * @param {string} key - Cache key
   */
  remove(key) {
    this.cache.delete(key);
  }

  /**
   * Clear entire cache
   */
  clear() {
    this.cache.clear();
  }

  /**
   * Get cache info (for debugging)
   * @returns {object} - Cache size and keys
   */
  info() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();

// Also export class for testing purposes
export default CacheManager;
