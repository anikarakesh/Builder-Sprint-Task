"use client";

import { useState, useRef, useCallback } from "react";
import { Heading, Text } from "../primitives/Typography";
import { Button } from "../primitives/Button";
import { Card } from "../primitives/Card";

interface ImageItem {
  id: string;
  url: string;
  file?: File;
  caption?: string;
  isUploading?: boolean;
}

interface ImageGalleryManagerProps {
  images: ImageItem[];
  onImagesChange: (images: ImageItem[]) => void;
  maxImages?: number;
  acceptedTypes?: string[];
  maxFileSize?: number; // in MB
  className?: string;
}

export function ImageGalleryManager({
  images,
  onImagesChange,
  maxImages = 20,
  acceptedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"],
  maxFileSize = 10,
  className = ""
}: ImageGalleryManagerProps) {
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file validation
  const validateFile = (file: File): string | null => {
    if (!acceptedTypes.includes(file.type)) {
      return `File type ${file.type} is not supported. Please use JPEG, PNG, or WebP.`;
    }
    if (file.size > maxFileSize * 1024 * 1024) {
      return `File size must be less than ${maxFileSize}MB.`;
    }
    return null;
  };

  // Handle file upload
  const handleFileUpload = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const newImages: ImageItem[] = [];

    fileArray.forEach((file, index) => {
      const error = validateFile(file);
      if (error) {
        // In a real app, you'd show this error to the user
        console.error(error);
        return;
      }

      if (images.length + newImages.length >= maxImages) {
        console.error(`Maximum ${maxImages} images allowed`);
        return;
      }

      const imageId = `${Date.now()}-${index}`;
      const imageUrl = URL.createObjectURL(file);
      
      newImages.push({
        id: imageId,
        url: imageUrl,
        file,
        isUploading: true
      });
    });

    if (newImages.length > 0) {
      const updatedImages = [...images, ...newImages];
      onImagesChange(updatedImages);

      // Simulate upload completion
      setTimeout(() => {
        const completedImages = updatedImages.map(img => 
          newImages.find(newImg => newImg.id === img.id) 
            ? { ...img, isUploading: false }
            : img
        );
        onImagesChange(completedImages);
      }, 1500);
    }
  }, [images, maxImages, onImagesChange]);

  // Handle drag and drop for upload
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  // Handle reordering
  const handleImageDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleImageDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleImageDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    const newImages = [...images];
    const draggedImage = newImages[draggedIndex];
    
    // Remove from old position
    newImages.splice(draggedIndex, 1);
    
    // Insert at new position
    const targetIndex = draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newImages.splice(targetIndex, 0, draggedImage);
    
    onImagesChange(newImages);
    setDraggedIndex(null);
  };

  // Handle delete
  const handleDeleteImage = (imageId: string) => {
    const updatedImages = images.filter(img => img.id !== imageId);
    onImagesChange(updatedImages);
    
    // Clean up object URL if it exists
    const imageToDelete = images.find(img => img.id === imageId);
    if (imageToDelete?.url.startsWith('blob:')) {
      URL.revokeObjectURL(imageToDelete.url);
    }
  };

  // Handle file input click
  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Heading level={3} className="text-2xl font-black text-slate-900 mb-2">
            Property Images
          </Heading>
          <Text className="text-slate-600">
            {images.length} of {maxImages} images • Drag to reorder
          </Text>
        </div>
        
        <Button
          variant="primary"
          onClick={handleFileInputClick}
          disabled={images.length >= maxImages}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
            <circle cx="12" cy="13" r="3"/>
          </svg>
          Add Images
        </Button>
      </div>

      {/* Upload Area */}
      {images.length < maxImages && (
        <div
          className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
            isDragOver 
              ? "border-blue-400 bg-blue-50/50 backdrop-blur-sm" 
              : "border-slate-300 hover:border-slate-400 bg-slate-50/30"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            
            <div>
              <Text className="text-xl font-bold text-slate-900 mb-2">
                Drag & drop images here
              </Text>
              <Text className="text-slate-600 mb-4">
                or click to browse your files
              </Text>
              <Text size="sm" className="text-slate-500">
                JPEG, PNG, WebP up to {maxFileSize}MB each
              </Text>
            </div>
            
            <Button
              variant="outline"
              onClick={handleFileInputClick}
              className="bg-white/80 backdrop-blur-sm hover:bg-white border-white/50 hover:border-slate-200"
            >
              Choose Files
            </Button>
          </div>
        </div>
      )}

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-move transition-all duration-300 ${
                draggedIndex === index ? "opacity-50 scale-95" : ""
              } ${
                dragOverIndex === index ? "scale-105" : ""
              }`}
              draggable
              onDragStart={(e) => handleImageDragStart(e, index)}
              onDragOver={(e) => handleImageDragOver(e, index)}
              onDrop={(e) => handleImageDrop(e, index)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-sm border-white/50 shadow-xl hover:shadow-2xl overflow-hidden">
                {/* Main image badge */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    Main
                  </div>
                )}
                
                {/* Loading overlay */}
                {image.isUploading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <Text size="sm" className="text-blue-600 font-medium">Uploading...</Text>
                    </div>
                  </div>
                )}
                
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Property image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Actions overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    {/* Preview button */}
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                    
                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="w-10 h-10 bg-red-500/90 backdrop-blur-sm hover:bg-red-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Position indicator */}
                <div className="absolute bottom-3 right-3 w-6 h-6 bg-black/70 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {images.length === 0 && (
        <Card className="bg-white/60 backdrop-blur-sm border-white/50 p-16 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
          
          <Heading level={3} className="text-2xl font-bold text-slate-900 mb-4">
            No Images Added Yet
          </Heading>
          <Text className="text-slate-600 mb-8 max-w-md mx-auto">
            Add high-quality images to showcase your property. The first image will be used as the main cover photo.
          </Text>
          
          <Button
            variant="primary"
            onClick={handleFileInputClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            Add Your First Image
          </Button>
        </Card>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.url}
              alt="Property image preview"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white p-4 rounded-b-2xl">
              <Text className="font-medium">
                Image {images.findIndex(img => img.id === selectedImage.id) + 1} of {images.length}
              </Text>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(",")}
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
}
