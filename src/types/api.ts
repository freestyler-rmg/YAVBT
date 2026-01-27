/**
 * Response from the random.dog API
 * @see https://random.dog/woof.json
 */
export interface DogApiResponse {
  /** Size of the media file in bytes */
  fileSizeBytes: number;
  /** URL to the random dog image or video */
  url: string;
}
