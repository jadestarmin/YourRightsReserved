import { Plus } from "lucide-react"

export function CreatePostPlaceholder() {
  return (
    <div className="border-2 border-dashed border-brand-gray-light rounded-2xl flex items-center justify-center h-16 text-brand-gray hover:border-brand-gray hover:text-brand-gray-dark cursor-pointer transition-colors">
      {" "}
      {/* Reduced from h-24 to h-16 */}
      <Plus className="w-6 h-6" /> {/* Reduced from w-8 h-8 to w-6 h-6 */}
    </div>
  )
}
