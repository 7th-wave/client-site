<template>
  <div class=" space-y-4">
    <div class="bg-white py-4 px-4 rounded-md shadow-md space-y-4">
      <div class="pb-5">
        <label for="comment" class="block text-sm font-medium text-gray-700"
          >Message us for questions and comments</label
        >
        <div class="mt-1">
          <textarea
            rows="4"
            name="comment"
            id="comment"
            class="
              shadow-sm
              focus:ring-primary-500 focus:border-primary-500
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
      </div>
      <div class="bg-white w-full h-px"></div>

      <div>
        <button
          class="
            text-white
            font-medium font-inter
            text-sm
            bg-black
            px-6
            py-2
            rounded-md
          "
        >
          COMMENT
        </button>
      </div>
    </div>
    <div class="flow-root bg-white py-4 px-4 rounded-md shadow-md ">
      <ul role="list" class="-mb-8">
        <li>
          <div class="relative pb-8">
            <span
              class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <div class="relative flex items-start space-x-3">
              <div class="relative">
                <img
                  class="
                    h-10
                    w-10
                    rounded-full
                    bg-gray-400
                    flex
                    items-center
                    justify-center
                    ring-8 ring-white
                  "
                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                  alt=""
                />

                <span
                  class="
                    absolute
                    -bottom-0.5
                    -right-1
                    bg-white
                    rounded-tl
                    px-0.5
                    py-px
                  "
                >
                  <!-- Heroicon name: solid/chat-alt -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a href="#" class="font-medium text-gray-900"
                      >Eduardo Benz</a
                    >
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Commented 6d ago</p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                    vestibulum nec varius. Et diam cursus quis sed purus nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="relative pb-8">
            <div class="relative flex items-start space-x-3">
              <div class="relative">
                <img
                  class="
                    h-10
                    w-10
                    rounded-full
                    bg-gray-400
                    flex
                    items-center
                    justify-center
                    ring-8 ring-white
                  "
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                  alt=""
                />

                <span
                  class="
                    absolute
                    -bottom-0.5
                    -right-1
                    bg-white
                    rounded-tl
                    px-0.5
                    py-px
                  "
                >
                  <!-- Heroicon name: solid/chat-alt -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a href="#" class="font-medium text-gray-900"
                      >Jason Meyers</a
                    >
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Commented 2h ago</p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                    vestibulum nec varius. Et diam cursus quis sed purus nam.
                    Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
                    ultrices eu venenatis diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>