import cloudinary from './cloudnary;'

export const deletePhotoCloud = async (imgId: string) => {
  try {
    await cloudinary.uploader.destroy(imgId)
  } catch (error) {
    throw new Error(String(error))
  }
}
